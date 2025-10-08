import { useAuth } from '@/application/hooks/useAuth';
import { Link } from 'react-router-dom';

export function HeaderPublicLayout() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold text-[hsl(var(--purple-heart-700))] group-hover:text-[hsl(var(--purple-heart-600))] transition-colors duration-200">
              La Bitácora de Josue
            </h1>
          </Link>
          <nav className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Inicio
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="text-gray-600 hover:text-gray-900"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
