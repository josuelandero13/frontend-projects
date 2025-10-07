import { Article } from '@/core/entities/article';
import { formatDate } from '@/utils/formatters/dateFormatter';
import { ArticleStatusBadge } from '../ArticleStatusBadge/ArticleStatusBadge';
import { ArticleActions } from '../ArticleActions/ArticleActions';

interface ArticleTableRowProps {
  article: Article;
  onDelete: (id: string, title: string) => void;
  isDeleting: boolean;
}

export function ArticleTableRow({
  article,
  onDelete,
  isDeleting,
}: ArticleTableRowProps) {
  return (
    <tr key={article.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{article.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <ArticleStatusBadge published={article.published} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(article.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <ArticleActions
          articleId={article.id}
          articleTitle={article.title}
          onDelete={onDelete}
          isDeleting={isDeleting}
        />
      </td>
    </tr>
  );
}
