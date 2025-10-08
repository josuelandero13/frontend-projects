import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-30">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Bienvenido a Mi Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Un espacio donde comparto mis pensamientos, experiencias y
          conocimientos sobre diversos temas que me apasionan.
        </p>

        <button
          onClick={() => navigate('/articles')}
          className="inline-flex items-center px-6 py-3 mt-6 text-lg font-semibold text-white bg-[hsl(var(--purple-heart-600))] hover:bg-[hsl(var(--purple-heart-700))] transition-colors duration-200 rounded-lg"
        >
          Ver Artículos
        </button>
      </div>
    </div>
  );
}
