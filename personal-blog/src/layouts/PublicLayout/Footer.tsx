import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              La Bitácora
            </h3>
            <p className="text-gray-600">
              Compartiendo conocimientos y experiencias sobre la vida.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/acerca"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  Acerca de mí
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/josuelandero13"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/josue-landero-44015a230/"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/jxlndr"
                  className="text-gray-600 hover:text-[hsl(var(--purple-heart-600))] transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <p className="text-gray-600 mb-2">
              ¿Tienes alguna pregunta o comentario?
            </p>
            <a
              href="mailto:josue.landero130899@gmail.com"
              className="text-[hsl(var(--purple-heart-600))] hover:underline"
            >
              josue.landero130899@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} La Bitácora de Josue. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
