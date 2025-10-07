import { Link } from 'react-router-dom';
import { useArticleManagement } from '@/application/hooks/useArticleManagement';
import { ArticleTable } from '@/ui/components/Article/ArticleTable/ArticleTable';
import { EmptyState } from '@/ui/components/Common/EmptyState/EmptyState';
import { LoadingState } from '@/ui/components/Common/LoadingState/LoadingState';
import { ErrorState } from '@/ui/components/Common/ErrorState/ErrorState';

export function Dashboard() {
  const { articles, isLoading, error, handleDelete, isDeleting } =
    useArticleManagement();

  if (isLoading) {
    return <LoadingState message="Cargando artículos..." />;
  }

  if (error) {
    return (
      <ErrorState
        error={error as Error}
        message="Error al cargar los artículos"
      />
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Gestión de Artículos
        </h1>
        <Link to="/admin/articles/new" className="btn btn-primary">
          + Nuevo Artículo
        </Link>
      </div>

      {articles && articles.length > 0 ? (
        <ArticleTable
          articles={articles}
          onDelete={handleDelete}
          isDeleting={isDeleting}
        />
      ) : (
        <EmptyState
          title="No hay artículos aún."
          actionText="Crear tu primer artículo"
          actionHref="/admin/articles/new"
        />
      )}
    </div>
  );
}
