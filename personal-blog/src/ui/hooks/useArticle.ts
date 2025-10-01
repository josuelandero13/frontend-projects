import { Article } from '@/core/entities/article';
import { useEffect, useState } from 'react';
import { getArticles } from '@/infrastructure/http/apiArticle';

export function useArticle() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getArticles();
        setArticles(response);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return {
    articles,
    loading,
    error,
  };
}
