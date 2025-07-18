import React from "react";
import { useParams, Link } from "react-router-dom";
import cursosData from "./cursodata";

const CursoDetalle = () => {
  const { slug } = useParams();
  const curso = cursosData.find(c => c.slug === slug);

  if (!curso) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Curso no encontrado</h2>
        <Link to="/cursos" className="text-blue-600 underline mt-4 inline-block">Volver a cursos</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-4">
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-2xl rounded-2xl p-8">
        <img
          src={curso.imagen}
          alt={curso.titulo}
          className="w-full object-cover rounded-xl shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{curso.titulo}</h1>
        <p className="text-gray-600 text-lg mb-6">{curso.descripcionCorta}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-red-500">Duración</h3>
            <p className="text-gray-700">{curso.duracion}</p>

            <h3 className="text-xl font-semibold text-red-500 mt-4">Horario</h3>
            <p className="text-gray-700">{curso.horarios}</p>

            <h3 className="text-xl font-semibold text-red-500 mt-4">Matrícula</h3>
            <p className="text-gray-700">{curso.matricula}</p>

            <h3 className="text-xl font-semibold text-red-500 mt-4">Mensualidad</h3>
            <p className="text-gray-700">{curso.mensualidad}</p>
          </div>

          <div>
            {curso.temas && (
              <>
                <h3 className="text-xl font-semibold text-red-500">Temas que aprenderás</h3>
                <ul className="list-disc ml-5 text-gray-700">
                  {curso.temas.map((tema, index) => (
                    <li key={index}>{tema}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-red-500">Requisitos</h3>
          <ul className="list-disc ml-5 text-gray-700">
            {curso.requisitos.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-500">Certificación</h3>
          <ul className="list-disc ml-5 text-gray-700">
            {curso.certificacion.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default CursoDetalle;
