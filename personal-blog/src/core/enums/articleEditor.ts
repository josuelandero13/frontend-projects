export enum ArticleEditorMessages {
  LOADING = 'Cargando artículo...',
  EDIT_ARTICLE = 'Editar Artículo',
  NEW_ARTICLE = 'Nuevo Artículo',
  EDIT_DESCRIPTION = 'Modifica el contenido de tu artículo.',
  NEW_DESCRIPTION = 'Crea un nuevo artículo para tu blog.',
  SAVE_ERROR = 'Error al guardar el artículo',
  CANCEL_CONFIRMATION = '¿Estás seguro de que quieres cancelar? Los cambios no guardados se perderán.',
  SAVING = 'Guardando...',
  UPDATE_ARTICLE = 'Actualizar Artículo',
  CREATE_ARTICLE = 'Crear Artículo',
  CANCEL = 'Cancelar',
  TITLE_LABEL = 'Título *',
  TITLE_PLACEHOLDER = 'Ingresa el título del artículo',
  CONTENT_LABEL = 'Contenido *',
  CONTENT_PLACEHOLDER = 'Escribe el contenido de tu artículo...',
  PUBLISH_LABEL = 'Publicar artículo',
  PREVIEW_TITLE = 'Vista Previa',
  PREVIEW_PLACEHOLDER = 'La vista previa aparecerá aquí cuando escribas el título y contenido.',
  CONTENT_PREVIEW = 'El contenido aparecerá aquí...',
  STATUS_PUBLISHED = 'Publicado',
  STATUS_DRAFT = 'Borrador',
  PUBLISH_NOTICE = 'El artículo será visible públicamente cuando guardes los cambios.',
}

export enum ArticleEditorPaths {
  DASHBOARD = '/admin/dashboard',
}

export enum ArticleEditorFields {
  TITLE = 'title',
  CONTENT = 'content',
  PUBLISHED = 'published',
  AUTHOR = 'author',
}
