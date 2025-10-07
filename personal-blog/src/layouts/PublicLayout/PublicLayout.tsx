import { ReactNode } from 'react';
import { Footer } from './Footer';
import { HeaderPublicLayout } from './HeaderPublicLayout';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderPublicLayout />

      <main className="py-20">{children}</main>

      <Footer />
    </div>
  );
}
