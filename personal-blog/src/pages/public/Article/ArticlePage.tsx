import { useArticles } from '@/application/hooks/useArticles';
import { ArticlesList } from '@/ui/components/Article/ArticleList';

export default function ArticlePage() {
  const { data, isLoading, error } = useArticles(true);

  return (
    <div className="animate-slide-in-top">
      <ArticlesList
        articles={data || []}
        loading={isLoading}
        error={error ? error.message : null}
      />
    </div>
  );
}
