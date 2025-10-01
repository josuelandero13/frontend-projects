import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">
        Página No Encontrada
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link 
        to="/" 
        className="btn btn-primary"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}