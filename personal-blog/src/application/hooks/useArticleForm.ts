import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { articleSchema } from '@/application/validators/articleSchema';
import { ArticleFormData } from '@/core/types/article';
import { useAuth } from './useAuth';
import { useCreateArticle, useUpdateArticle } from './useArticles';
import {
  ArticleEditorMessages,
  ArticleEditorPaths,
} from '@/core/enums/articleEditor';

export const useArticleForm = (id?: string, existingArticle?: any) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const createArticleMutation = useCreateArticle();
  const updateArticleMutation = useUpdateArticle();
  const isEditing = !!id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: '',
      content: '',
      published: false,
      author: user?.username || '',
    },
  });

  const published = watch('published');
  const content = watch('content');
  const title = watch('title');

  useEffect(() => {
    if (isEditing && existingArticle) {
      reset({
        title: existingArticle.title,
        content: existingArticle.content,
        published: existingArticle.published,
        author: existingArticle.author || user?.username || '',
      });
    }
  }, [isEditing, existingArticle, reset, user]);

  const onSubmit = async (data: ArticleFormData) => {
    try {
      if (isEditing && id) {
        await updateArticleMutation.mutateAsync({
          id,
          article: data,
        });
      } else {
        await createArticleMutation.mutateAsync({
          ...data,
          author: user?.username || 'admin',
        });
      }
      navigate('/admin/dashboard');
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || ArticleEditorMessages.SAVE_ERROR
      );
    }
  };

  const handleCancel = () => {
    if (window.confirm(ArticleEditorMessages.CANCEL_CONFIRMATION)) {
      navigate(ArticleEditorPaths.DASHBOARD);
    }
  };

  return {
    register,
    handleSubmit: (onValid: any) => handleSubmit(onValid),
    errors,
    isSubmitting,
    published,
    content,
    title,
    isEditing,
    handleCancel,
    onSubmit,
    setValue,
  };
};
