import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ArticleFormData } from '@/core/types/article';
import {
  ArticleEditorMessages,
  ArticleEditorFields,
} from '@/core/enums/articleEditor';

type ArticleFormProps = {
  register: UseFormRegister<ArticleFormData>;
  errors: FieldErrors<ArticleFormData>;
  content: string;
  title: string;
  onPublishChange: (checked: boolean) => void;
  published: boolean;
};

export const ArticleForm: React.FC<ArticleFormProps> = ({
  register,
  errors,
  content,
  onPublishChange,
  published,
}) => (
  <div className="space-y-6">
    <div>
      <label
        htmlFor={ArticleEditorFields.TITLE}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {ArticleEditorMessages.TITLE_LABEL}
      </label>
      <input
        type="text"
        id={ArticleEditorFields.TITLE}
        {...register(ArticleEditorFields.TITLE)}
        className="input"
        placeholder={ArticleEditorMessages.TITLE_PLACEHOLDER}
      />
      {errors[ArticleEditorFields.TITLE] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[ArticleEditorFields.TITLE]?.message}
        </p>
      )}
    </div>

    <div>
      <label
        htmlFor={ArticleEditorFields.CONTENT}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {ArticleEditorMessages.CONTENT_LABEL}
      </label>
      <textarea
        id={ArticleEditorFields.CONTENT}
        rows={15}
        {...register(ArticleEditorFields.CONTENT)}
        className="input resize-vertical"
        placeholder={ArticleEditorMessages.CONTENT_PLACEHOLDER}
      />
      {errors[ArticleEditorFields.CONTENT] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[ArticleEditorFields.CONTENT]?.message}
        </p>
      )}
      <p className="mt-1 text-sm text-gray-500">
        {content?.length || 0} caracteres
      </p>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id={ArticleEditorFields.PUBLISHED}
        {...register(ArticleEditorFields.PUBLISHED)}
        onChange={(e) => onPublishChange(e.target.checked)}
        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
      />
      <label
        htmlFor={ArticleEditorFields.PUBLISHED}
        className="ml-2 block text-sm text-gray-900"
      >
        {ArticleEditorMessages.PUBLISH_LABEL}
      </label>
    </div>

    {published && (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              {ArticleEditorMessages.PUBLISH_NOTICE}
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
);
