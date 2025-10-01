import { Article } from "@/core/entities/article";
import { Link } from "react-router-dom";
import { ArticleIcon } from "@/ui/icons/ArticleIcon";

type ArticleItemProps = {
  article: Article;
};

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li className="group">
      <Link
        to={`/article/${article.id}`}
        state={{ article }}
        className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors p-2 rounded-md hover:bg-gray-50"
      >
        <ArticleIcon />
        <span className="truncate">{article.title}</span>
        <span className="ml-auto text-xs text-gray-400">
          {new Date(article.createdAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
          })}
        </span>
      </Link>
    </li>
  );
}