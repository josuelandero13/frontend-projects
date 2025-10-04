import {
  Article,
  CreateArticleRequest,
  UpdateArticleRequest,
} from '@/core/entities/article';
import { apiClient } from '@/infrastructure/http/apiClient';

export const articleService = {
  async getArticles(publishedOnly: boolean = true): Promise<Article[]> {
    const response = await apiClient.get(
      `/articles?published=${publishedOnly}`
    );

    return response.data;
  },

  async getArticleById(id: string): Promise<Article> {
    const response = await apiClient.get(`/articles/${id}`);

    return response.data;
  },

  async createArticle(article: CreateArticleRequest): Promise<Article> {
    const response = await apiClient.post('/articles', article);

    return response.data;
  },

  async updateArticle(
    id: string,
    article: UpdateArticleRequest
  ): Promise<Article> {
    const response = await apiClient.put(`/articles/${id}`, article);

    return response.data;
  },

  async deleteArticle(id: string): Promise<void> {
    await apiClient.delete(`/articles/${id}`);
  },
};
