import { ArticlesList } from "@/ui/components/articles/ArticleList";
import { useArticle } from "@/ui/hooks/useArticle";

export default function ArticlePage() {
  const { articles, loading, error } = useArticle();

  return (
    <ArticlesList
      articles={articles}
      loading={loading}
      error={error}
    />
  );
}
