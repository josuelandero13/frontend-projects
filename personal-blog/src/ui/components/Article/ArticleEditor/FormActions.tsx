import React from 'react';
import { ArticleEditorMessages } from '@/core/enums/articleEditor';

type FormActionsProps = {
  isSubmitting: boolean;
  isEditing: boolean;
  onCancel: () => void;
};

export const FormActions: React.FC<FormActionsProps> = ({
  isSubmitting,
  isEditing,
  onCancel,
}) => (
  <div className="flex justify-end space-x-4 pt-6 border-t">
    <button
      type="button"
      onClick={onCancel}
      className="btn btn-secondary"
      disabled={isSubmitting}
    >
      {ArticleEditorMessages.CANCEL}
    </button>
    <button type="submit" disabled={isSubmitting} className="btn btn-primary">
      {isSubmitting
        ? ArticleEditorMessages.SAVING
        : isEditing
          ? ArticleEditorMessages.UPDATE_ARTICLE
          : ArticleEditorMessages.CREATE_ARTICLE}
    </button>
  </div>
);
