import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
