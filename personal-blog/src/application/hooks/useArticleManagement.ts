import { useArticles } from './useArticles';
import { useDeleteArticle } from './useArticles';

export function useArticleManagement() {
  const { data: articles, isLoading, error } = useArticles(false);
  const deleteArticleMutation = useDeleteArticle();

  const handleDelete = async (id: string, title: string) => {
    if (
      window.confirm(
        `¿Estás seguro de que quieres eliminar el artículo "${title}"?`
      )
    ) {
      try {
        await deleteArticleMutation.mutateAsync(id);
      } catch {
        alert('Error al eliminar el artículo');
      }
    }
  };

  return {
    articles,
    isLoading,
    error,
    handleDelete,
    isDeleting: deleteArticleMutation.isPending,
  };
}
