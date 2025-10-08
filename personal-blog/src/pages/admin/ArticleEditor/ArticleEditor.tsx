import { useParams } from 'react-router-dom';
import { useArticle } from '@/application/hooks/useArticles';
import { useArticleForm } from '@/application/hooks/useArticleForm';
import { ArticleForm } from '@/ui/components/Article/ArticleEditor/ArticleForm';
import { ArticlePreview } from '@/ui/components/Article/ArticleEditor/ArticlePreview';
import { FormActions } from '@/ui/components/Article/ArticleEditor/FormActions';
import {
  ArticleEditorMessages,
  ArticleEditorFields,
} from '@/core/enums/articleEditor';

export function ArticleEditor() {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const { data: existingArticle, isLoading: isLoadingArticle } = useArticle(
    id || ''
  );

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    published,
    content,
    title,
    isEditing: isEditMode,
    handleCancel,
    onSubmit,
    setValue,
  } = useArticleForm(id, existingArticle);

  if (isEditing && isLoadingArticle) {
    return (
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">{ArticleEditorMessages.LOADING}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {isEditing
            ? ArticleEditorMessages.EDIT_ARTICLE
            : ArticleEditorMessages.NEW_ARTICLE}
        </h1>
        <p className="text-gray-600 mt-2">
          {isEditing
            ? ArticleEditorMessages.EDIT_DESCRIPTION
            : ArticleEditorMessages.NEW_DESCRIPTION}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-6">
        <ArticleForm
          register={register}
          errors={errors}
          content={content}
          title={title}
          published={published}
          onPublishChange={(checked) =>
            setValue(ArticleEditorFields.PUBLISHED, checked, {
              shouldValidate: true,
            })
          }
        />

        <FormActions
          isSubmitting={isSubmitting}
          isEditing={isEditMode}
          onCancel={handleCancel}
        />
      </form>

      <ArticlePreview title={title} content={content} published={published} />
    </div>
  );
}
