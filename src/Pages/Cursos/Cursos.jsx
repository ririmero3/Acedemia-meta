import React from 'react';
import { Link } from 'react-router-dom';
import cursos from './curso';

const Cursos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Nuestros Cursos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cursos.map((curso) => (
          <Link
            to={`/curso/${curso.slug}`}
            key={curso.id}
            className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-500 mb-2 group-hover:underline">
                {curso.titulo}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{curso.descripcion}</p>
              <div className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition">
                Más información
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
