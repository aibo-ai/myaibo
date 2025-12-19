import express from 'express';
import { Op, WhereAttributeHashValue } from 'sequelize';
import CaseStudy from '../models/CaseStudy';
import User from '../models/User';
import { protect, authorize, AuthRequest } from '../middleware/auth';

const router = express.Router();

// @desc    Get all case studies (public)
// @route   GET /api/case-studies
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 8;
    const industry = req.query.industry as string;
    const outcome = req.query.outcome as string;
    const search = req.query.search as string;
    const status = req.query.status as string || 'published';

    const offset = (page - 1) * limit;

    // Build where clause
    const whereClause: any = {};
    
    if (status === 'published') {
      whereClause.status = 'published';
      whereClause.publishedAt = { [Op.not]: null };
    } else if (status && status !== 'all') {
      // For admin views we may explicitly request status="all" to get every case study
      whereClause.status = status;
    }

    if (industry) {
      whereClause.industries = { [Op.contains]: [industry] };
    }

    if (outcome) {
      whereClause.tags = { [Op.contains]: [outcome] };
    }

    if (search) {
      whereClause[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { clientName: { [Op.iLike]: `%${search}%` } },
        { challenge: { [Op.iLike]: `%${search}%` } },
        { solution: { [Op.iLike]: `%${search}%` } }
      ];
    }

    const { count, rows: caseStudies } = await CaseStudy.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar']
        }
      ],
      order: [['publishedAt', 'DESC']],
      limit,
      offset
    });

    res.json({
      success: true,
      count,
      pagination: {
        page,
        pages: Math.ceil(count / limit),
        limit,
        total: count
      },
      data: caseStudies
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get single case study
// @route   GET /api/case-studies/:slug
// @access  Public
router.get('/:slug', async (req, res, next) => {
  try {
    const caseStudy = await CaseStudy.findOne({
      where: { slug: req.params.slug },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'avatar', 'bio']
        }
      ]
    });

    if (!caseStudy) {
      res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
      return;
    }

    // Increment view count for published case studies
    if (caseStudy.isPublished()) {
      await caseStudy.incrementViewCount();
    }

    // Get related case studies
    let relatedCaseStudies: CaseStudy[] = [];
    try {
      relatedCaseStudies = await CaseStudy.findAll({
        where: {
          id: { [Op.ne]: caseStudy.id },
          status: 'published',
          publishedAt: { [Op.not]: null as unknown as WhereAttributeHashValue<Date | undefined> },
          // NOTE: Op.overlap generates the `&&` operator, which is not supported by SQLite.
          // In SQLite mode this query will fail; we catch and fall back to an empty array.
          [Op.or]: [
            { industries: { [Op.overlap]: caseStudy.industries } },
            { tags: { [Op.overlap]: caseStudy.tags } }
          ]
        },
        include: [
          {
            model: User,
            as: 'author',
            attributes: ['id', 'firstName', 'lastName']
          }
        ],
        order: [['publishedAt', 'DESC']],
        limit: 3
      });
    } catch (err) {
      console.warn('Failed to load related case studies (likely due to SQLite not supporting array overlap operators):', err);
    }

    res.json({
      success: true,
      data: {
        ...caseStudy.toJSON(),
        relatedCaseStudies,
        keyMetrics: caseStudy.getKeyMetrics()
      }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Create new case study
// @route   POST /api/case-studies
// @access  Private
router.post('/', protect, authorize('admin', 'editor'), async (req: AuthRequest, res, next) => {
  try {
    const body = req.body as any;

    const slugify = (val: string) =>
      (val || '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const toJsonArrayString = (value: any): string => {
      if (!value) return '[]';
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (!trimmed) return '[]';
        try {
          const parsed = JSON.parse(trimmed);
          if (Array.isArray(parsed)) return JSON.stringify(parsed);
        } catch {
          // fall through
        }
        return JSON.stringify([trimmed]);
      }
      if (Array.isArray(value)) {
        return JSON.stringify(value);
      }
      return '[]';
    };

    const buildResults = (): string => {
      if (Array.isArray(body.results)) {
        return JSON.stringify(body.results);
      }
      if (typeof body.results === 'string' && body.results.trim()) {
        return JSON.stringify([
          {
            metric: 'Summary',
            value: '',
            unit: '',
            description: body.results.trim(),
          },
        ]);
      }
      return '[]';
    };

    const metaTitle = (body.metaTitle ?? body.meta_title ?? '').trim();
    const metaDescription = (body.metaDescription ?? body.meta_description ?? '').trim();

    const caseStudyData: any = {
      // Required basics
      title: body.title,
      slug: slugify(body.slug || body.title || ''),

      // Map client name/logo from either camelCase or snake_case
      clientName: body.clientName || body.client_name || 'Unknown Client',
      clientLogo: body.clientLogo || body.client_logo || null,

      // Core narrative fields
      challenge: body.challenge || body.excerpt || '',
      solution: body.solution || body.objectives || '',
      objectives: body.objectives,
      results: buildResults(),
      content: body.content || body.excerpt || body.objectives || '',

      // Media & meta
      featuredImage: body.featuredImage || body.featured_image || null,

      // Ownership & status
      authorId: req.user.id,
      status: body.status || 'draft',
      publishedAt: body.status === 'published' ? new Date() : null,

      // Classification (stored as JSON strings in TEXT columns)
      industries: toJsonArrayString(
        body.industries || (body.industry ? [body.industry] : [])
      ),
      tags: toJsonArrayString(body.tags),

      // Optional extras
      testimonial:
        body.testimonial && typeof body.testimonial !== 'string'
          ? JSON.stringify(body.testimonial)
          : body.testimonial || null,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      canonicalUrl: body.canonicalUrl || body.canonical_url,
    };

    const caseStudy = await CaseStudy.create(caseStudyData);

    res.status(201).json({
      success: true,
      data: caseStudy,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Update case study
// @route   PUT /api/case-studies/:id
// @access  Private
router.put('/:id', protect, authorize('admin', 'editor'), async (req: AuthRequest, res, next) => {
  try {
    const caseStudy = await CaseStudy.findByPk(req.params.id);

    if (!caseStudy) {
      res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
      return;
    }

    // Check if user is author or admin
    if (caseStudy.authorId !== req.user.id && req.user.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'Not authorized to update this case study'
      });
      return;
    }

    await caseStudy.update(req.body);

    res.json({
      success: true,
      data: caseStudy
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Delete case study
// @route   DELETE /api/case-studies/:id
// @access  Private
router.delete('/:id', protect, authorize('admin', 'editor'), async (req: AuthRequest, res, next) => {
  try {
    const caseStudy = await CaseStudy.findByPk(req.params.id);

    if (!caseStudy) {
      res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
      return;
    }

    // Check if user is author or admin
    if (caseStudy.authorId !== req.user.id && req.user.role !== 'admin') {
      res.status(403).json({
        success: false,
        message: 'Not authorized to delete this case study'
      });
      return;
    }

    await caseStudy.destroy();

    res.json({
      success: true,
      message: 'Case study deleted successfully'
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get case study industries
// @route   GET /api/case-studies/meta/industries
// @access  Public
router.get('/meta/industries', async (req, res, next) => {
  try {
    const caseStudies = await CaseStudy.findAll({
      where: { status: 'published' },
      attributes: ['industries']
    });

    const industries = [...new Set(caseStudies.flatMap(cs => cs.industries))];
    
    res.json({
      success: true,
      data: industries
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get case study tags
// @route   GET /api/case-studies/meta/tags
// @access  Public
router.get('/meta/tags', async (req, res, next) => {
  try {
    const caseStudies = await CaseStudy.findAll({
      where: { status: 'published' },
      attributes: ['tags']
    });

    const tags = [...new Set(caseStudies.flatMap(cs => cs.tags))];
    
    res.json({
      success: true,
      data: tags
    });
  } catch (error) {
    next(error);
  }
});

export default router;
