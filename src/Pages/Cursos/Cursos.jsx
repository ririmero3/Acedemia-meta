import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cursos from './curso';

const Cursos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Nuestros Cursos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-500 mb-2">{curso.titulo}</h2>
              <p className="text-gray-700 text-sm mb-4">{curso.descripcion}</p>
              <Link
               to={`/curso/${curso.slug}`}
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition"
              >
                Más información
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
