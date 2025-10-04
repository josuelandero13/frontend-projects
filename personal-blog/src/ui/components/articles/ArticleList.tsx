import { Article } from '@/core/entities/article';
import { ArticleLoading } from './ArticleLoading';
import { ArticleError } from './ArticleError';
import { ArticleListContent } from './ArticleListContent';

export enum ArticleListMessages {
  TITLE = 'Artículos Recientes',
  SUBTITLE = 'Explora las últimas publicaciones',
  NO_ARTICLES_TITLE = 'No hay artículos disponibles',
  NO_ARTICLES_DESCRIPTION = 'Vuelve más tarde para ver nuevas publicaciones.',
  LOADING_ALT = 'Cargando artículos...',
}

type ArticlesListProps = {
  articles: Article[];
  loading: boolean;
  error: string | null;
};

export function ArticlesList({ articles, loading, error }: ArticlesListProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {ArticleListMessages.TITLE}
        </h1>
        <p className="text-gray-600">{ArticleListMessages.SUBTITLE}</p>
      </div>

      {loading ? (
        <ArticleLoading />
      ) : error ? (
        <ArticleError error={error} />
      ) : (
        <ArticleListContent articles={articles} />
      )}
    </div>
  );
}
