import {
  CreateArticleRequest,
  UpdateArticleRequest,
} from '@/core/entities/article';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { articleService } from '../services/articleService';

export const useArticles = (publishedOnly: boolean = true) => {
  return useQuery({
    queryKey: ['articles', publishedOnly],
    queryFn: () => articleService.getArticles(publishedOnly),
  });
};

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => articleService.getArticleById(id),
    enabled: !!id,
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (article: CreateArticleRequest) =>
      articleService.createArticle(article),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      article,
    }: {
      id: string;
      article: UpdateArticleRequest;
    }) => articleService.updateArticle(id, article),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      queryClient.invalidateQueries({ queryKey: ['article', variables.id] });
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => articleService.deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
