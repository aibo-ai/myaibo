import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

export interface CaseStudyAttributes {
  id: number;
  title: string;
  slug: string;
  clientName: string;
  clientLogo?: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    unit: string;
    description?: string;
  }>;
  content: string;
  featuredImage?: string;
  authorId: number;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  industries: string[];
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CaseStudyCreationAttributes extends Optional<CaseStudyAttributes, 'id' | 'clientLogo' | 'featuredImage' | 'publishedAt' | 'testimonial' | 'metaTitle' | 'metaDescription' | 'canonicalUrl' | 'viewCount' | 'createdAt' | 'updatedAt'> {}

class CaseStudy extends Model<CaseStudyAttributes, CaseStudyCreationAttributes> implements CaseStudyAttributes {
  public id!: number;
  public title!: string;
  public slug!: string;
  public clientName!: string;
  public clientLogo?: string;
  public challenge!: string;
  public solution!: string;
  public results!: Array<{
    metric: string;
    value: string;
    unit: string;
    description?: string;
  }>;
  public content!: string;
  public featuredImage?: string;
  public authorId!: number;
  public status!: 'draft' | 'published' | 'archived';
  public publishedAt?: Date;
  public industries!: string[];
  public tags!: string[];
  public testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  public metaTitle?: string;
  public metaDescription?: string;
  public canonicalUrl?: string;
  public viewCount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Associations
  public author?: User;

  // Instance methods
  public incrementViewCount(): Promise<void> {
    this.viewCount += 1;
    return this.save() as unknown as Promise<void>;
  }

  public isPublished(): boolean {
    return this.status === 'published' && this.publishedAt !== null;
  }

  public getKeyMetrics(): Array<{ metric: string; value: string; unit: string; description?: string }> {
    return this.results.filter(result => result.metric.toLowerCase().includes('key') || 
      ['conversion', 'revenue', 'efficiency', 'growth'].some(keyword => 
        result.metric.toLowerCase().includes(keyword)
      )
    );
  }
}

CaseStudy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255],
        is: /^[a-z0-9-]+$/,
      },
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    clientLogo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    challenge: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    results: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    featuredImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'archived'),
      allowNull: false,
      defaultValue: 'draft',
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    industries: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    testimonial: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    metaTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 60],
      },
    },
    metaDescription: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 160],
      },
    },
    canonicalUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'case_studies',
    timestamps: true,
    indexes: [
      {
        fields: ['slug'],
        unique: true,
      },
      {
        fields: ['status', 'publishedAt'],
      },
      {
        fields: ['industries'],
        using: 'gin',
      },
      {
        fields: ['tags'],
        using: 'gin',
      },
      {
        fields: ['clientName'],
      },
    ],
  }
);

// Define associations
CaseStudy.belongsTo(User, {
  foreignKey: 'authorId',
  as: 'author',
});

User.hasMany(CaseStudy, {
  foreignKey: 'authorId',
  as: 'caseStudies',
});

export default CaseStudy;
