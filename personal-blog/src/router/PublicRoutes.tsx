import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/public/Home/Home';
import { Article } from '@/ui/components/Article/Article';
import ArticlePage from '@/pages/public/Article/ArticlePage';
import { NotFound } from '@/pages/public/NotFound/NotFound';
import PublicLayout from '@/layouts/PublicLayout/PublicLayout';

export default function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PublicLayout>
  );
}
