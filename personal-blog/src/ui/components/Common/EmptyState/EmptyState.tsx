import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  actionText: string;
  actionHref: string;
}

export function EmptyState({ title, actionText, actionHref }: EmptyStateProps) {
  return (
    <div className="card p-8 text-center">
      <p className="text-gray-500 text-lg mb-4">{title}</p>
      <Link to={actionHref} className="btn btn-primary">
        {actionText}
      </Link>
    </div>
  );
}
