export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateArticleRequest {
  title: string;
  content: string;
  author: string;
  published?: boolean;
}

export interface UpdateArticleRequest {
  title?: string;
  content?: string;
  published?: boolean;
}
