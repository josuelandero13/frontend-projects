import { Article } from '@/core/entities/article';
import { ArticleItem } from './ArticleItem';

enum ArticleListMessages {
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

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-6">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                {ArticleListMessages.NO_ARTICLES_TITLE}
              </h3>
              <p className="mt-1 text-gray-500">
                {ArticleListMessages.NO_ARTICLES_DESCRIPTION}
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="py-6 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-200"
                >
                  <ArticleItem article={article} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
