import { Article } from '../entities/article';

export type ArticleFormData = Omit<Article, 'id' | 'createdAt' | 'updatedAt'>;
