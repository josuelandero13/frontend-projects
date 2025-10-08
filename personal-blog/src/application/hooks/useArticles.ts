import {
  CreateArticleRequest,
  UpdateArticleRequest,
} from '@/core/entities/article';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { articleService } from '../services/articleService';
import { QueryKeys, ErrorMessages } from '@/core/enums/articleHook';

export const useArticles = (publishedOnly: boolean = true) => {
  return useQuery({
    queryKey: [QueryKeys.ARTICLES, publishedOnly],
    queryFn: () => articleService.getArticles(publishedOnly),
    staleTime: 5 * 60 * 1000,
  });
};

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.ARTICLE, id],
    queryFn: () => articleService.getArticleById(id),
    enabled: !!id,
    retry: (failureCount, error: any) => {
      if (error.response?.status === 404) return false;

      return failureCount < 3;
    },
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (article: CreateArticleRequest) =>
      articleService.createArticle(article),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ARTICLES] });
    },
    onError: (error: any) => {
      throw new Error(
        error.response?.data?.error || ErrorMessages.CREATE_ARTICLE
      );
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
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ARTICLES] });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.ARTICLE, variables.id],
      });
    },
    onError: (error: any) => {
      throw new Error(
        error.response?.data?.error || ErrorMessages.UPDATE_ARTICLE
      );
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => articleService.deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ARTICLES] });
    },
    onError: (error: any) => {
      throw new Error(
        error.response?.data?.error || ErrorMessages.DELETE_ARTICLE
      );
    },
  });
};
