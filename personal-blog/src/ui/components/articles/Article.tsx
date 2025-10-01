import { useLocation } from 'react-router-dom';

enum Message {
  NOT_FOUND = 'Artículo no encontrado',
}

enum PublishState {
  PUBLISHED = 'Publicado',
  DRAFT = 'Borrador',
}

export function Article() {
  const location = useLocation();
  const { article } = location.state;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{Message.NOT_FOUND}</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    };

    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
        <div className="p-6 sm:p-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-snug tracking-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center text-gray-600 text-sm gap-2">
              <span className="flex items-center gap-1">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    article.published ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  aria-hidden="true"
                />
                {article.published
                  ? PublishState.PUBLISHED
                  : PublishState.DRAFT}
              </span>

              <span>•</span>
              <span>{formatDate(article.createdAt)}</span>

              <span>•</span>
              <span className="italic">Por {article.author}</span>

              {article.updatedAt !== article.createdAt && (
                <>
                  <span>•</span>
                  <span>Actualizado el {formatDate(article.updatedAt)}</span>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          <footer className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-500 flex flex-col sm:flex-row sm:justify-between gap-2">
            <p>
              <span className="font-medium">ID:</span> {article.id}
            </p>
            <p>
              <span className="font-medium">Estado:</span>{' '}
              {article.published ? PublishState.PUBLISHED : PublishState.DRAFT}
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
