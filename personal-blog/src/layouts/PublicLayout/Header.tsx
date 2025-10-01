import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold text-[hsl(var(--purple-heart-700))] group-hover:text-[hsl(var(--purple-heart-600))] transition-colors duration-200">
              La Bitácora de Josue
            </h1>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-[hsl(var(--purple-heart-50))]"
            >
              Inicio
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-[hsl(var(--purple-heart-50))]"
            >
              Blog
            </Link>
            <Link
              to="/acerca"
              className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-[hsl(var(--purple-heart-50))]"
            >
              Acerca de mí
            </Link>
            <Link
              to="/contacto"
              className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-[hsl(var(--purple-heart-50))]"
            >
              Contacto
            </Link>
            <Link
              to="/admin/login"
              className="ml-4 px-4 py-2 rounded-lg font-medium bg-[hsl(var(--purple-heart-600))] text-white hover:bg-[hsl(var(--purple-heart-700))] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--purple-heart-500))]"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
