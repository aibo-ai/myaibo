import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import User from './User';

export interface BlogAttributes {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  authorId: number;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  categories: string[];
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogCreationAttributes extends Optional<BlogAttributes, 'id' | 'featuredImage' | 'publishedAt' | 'metaTitle' | 'metaDescription' | 'canonicalUrl' | 'viewCount' | 'createdAt' | 'updatedAt'> {}

class Blog extends Model<BlogAttributes, BlogCreationAttributes> implements BlogAttributes {
  public id!: number;
  public title!: string;
  public slug!: string;
  public excerpt!: string;
  public content!: string;
  public featuredImage?: string;
  public authorId!: number;
  public status!: 'draft' | 'published' | 'archived';
  public publishedAt?: Date;
  public categories!: string[];
  public tags!: string[];
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

  public getReadingTime(): number {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }

  public generateTableOfContents(): { id: string; text: string; level: number }[] {
    const headings = this.content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi) || [];
    return headings.map((heading: string, index: number): { id: string; text: string; level: number } => {
      const text = heading.replace(/<[^>]*>/g, '');
      const level = parseInt(heading.match(/<h([1-6])/)?.[1] || '1');
      return {
        id: `heading-${index}`,
        text,
        level
      };
    }) as unknown as { id: string; text: string; level: number }[];   
  }
}

Blog.init(
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
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [50, 500],
      },
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
    categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
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
    tableName: 'blogs',
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
        fields: ['categories'],
        using: 'gin',
      },
      {
        fields: ['tags'],
        using: 'gin',
      },
    ],
  }
);

// Define associations
Blog.belongsTo(User, {
  foreignKey: 'authorId',
  as: 'author',
});

User.hasMany(Blog, {
  foreignKey: 'authorId',
  as: 'blogs',
});

export default Blog;
