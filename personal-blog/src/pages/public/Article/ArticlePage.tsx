import { ArticlesList } from '@/ui/components/articles/ArticleList';
import { useArticles } from '@/application/hooks/useArticles';

export default function ArticlePage() {
  const { data, isLoading, error } = useArticles(true);

  return (
    <ArticlesList
      articles={data || []}
      loading={isLoading}
      error={error ? error.message : null}
    />
  );
}
