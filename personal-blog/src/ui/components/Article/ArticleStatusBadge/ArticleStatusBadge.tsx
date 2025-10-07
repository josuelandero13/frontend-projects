interface ArticleStatusBadgeProps {
  published: boolean;
}

export function ArticleStatusBadge({ published }: ArticleStatusBadgeProps) {
  return (
    <span
      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
        published
          ? 'bg-green-100 text-green-800'
          : 'bg-yellow-100 text-yellow-800'
      }`}
    >
      {published ? 'Publicado' : 'Borrador'}
    </span>
  );
}
