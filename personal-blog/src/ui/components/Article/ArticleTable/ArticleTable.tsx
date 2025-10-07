import { Article } from '@/core/entities/article';
import { ArticleTableHeader } from './ArticleTableHeader';
import { ArticleTableRow } from './ArticleTableRow';

interface ArticleTableProps {
  articles: Article[];
  onDelete: (id: string, title: string) => void;
  isDeleting: boolean;
}

export function ArticleTable({
  articles,
  onDelete,
  isDeleting,
}: ArticleTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <ArticleTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {articles.map((article) => (
            <ArticleTableRow
              key={article.id}
              article={article}
              onDelete={onDelete}
              isDeleting={isDeleting}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
