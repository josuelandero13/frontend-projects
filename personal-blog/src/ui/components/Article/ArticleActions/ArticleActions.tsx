import { Link } from 'react-router-dom';

interface ArticleActionsProps {
  articleId: string;
  articleTitle: string;
  onDelete: (id: string, title: string) => void;
  isDeleting: boolean;
}

export function ArticleActions({
  articleId,
  articleTitle,
  onDelete,
  isDeleting,
}: ArticleActionsProps) {
  return (
    <div className="flex space-x-4">
      <Link
        to={`/admin/articles/edit/${articleId}`}
        className="text-primary-600 hover:text-primary-900 text-sm font-medium"
      >
        Editar
      </Link>
      <Link
        to={`/article/${articleId}`}
        className="text-primary-600 hover:text-primary-900 text-sm font-medium"
      >
        Ver
      </Link>
      <button
        onClick={() => onDelete(articleId, articleTitle)}
        className="text-red-600 hover:text-red-900 text-sm font-medium"
        disabled={isDeleting}
      >
        {isDeleting ? 'Eliminando...' : 'Eliminar'}
      </button>
    </div>
  );
}
