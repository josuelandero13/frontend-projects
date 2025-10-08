import React from 'react';
import { ArticleEditorMessages } from '@/core/enums/articleEditor';

type ArticlePreviewProps = {
  title: string;
  content: string;
  published: boolean;
};

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  content,
  published,
}) => (
  <div className="mt-8">
    <h2 className="text-lg font-semibold text-gray-900 mb-4">
      {ArticleEditorMessages.PREVIEW_TITLE}
    </h2>
    <div className="card p-6">
      {title ? (
        <>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-700">
              {content || ArticleEditorMessages.CONTENT_PREVIEW}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Estado:{' '}
            {published
              ? ArticleEditorMessages.STATUS_PUBLISHED
              : ArticleEditorMessages.STATUS_DRAFT}
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center py-8">
          {ArticleEditorMessages.PREVIEW_PLACEHOLDER}
        </p>
      )}
    </div>
  </div>
);
