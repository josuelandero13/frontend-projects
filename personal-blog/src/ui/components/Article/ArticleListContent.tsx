import { Article } from '@/core/entities/article';
import { ArticleItem } from './ArticleItem';
import { EmptyArticleList } from './EmptyArticleList';

interface ArticleListContentProps {
  articles: Article[];
}

export function ArticleListContent({ articles }: ArticleListContentProps) {
  if (articles.length === 0) {
    return <EmptyArticleList />;
  }

  return (
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
  );
}
