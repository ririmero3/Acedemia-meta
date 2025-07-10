// src/Pages/Inicio.jsx
import React from 'react';
import Carrusel from '../Inicio/Carrusel';
import senecuy from '../../Components/Images/senecyt.jpg';
import ministerio from '../../Components/Images/ministerio.png';
import cap from '../../Components/Images/cap.jpg';
import { Link } from 'react-router-dom';

const Inicio = () => {

    return (
        <div className="w-full">
            <Carrusel />

            {/* Sección Promocional */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-5xl mx-auto mt-10 border border-gray-200">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
                    🎓 ¡Prepárate para un Futuro Profesional Exitoso!
                </h2>
                <p className="text-lg md:text-xl text-center text-gray-600 font-medium mb-6">
                    En <span className="text-red-500 font-bold">Academia Meπa</span>, transformamos tu pasión en una carrera.
                </p>

                <p className="text-gray-700 text-base md:text-lg mb-8 text-center">
                    Con cursos prácticos en <strong>Cosmetología, Enfermería, Belleza Integral, Técnica de Uñas, Barbería, Estética Integral, Masajes Terapéuticos, Mirada Perfecta</strong> y <strong>Electricidad</strong>, te capacitamos con lo que el mercado realmente necesita.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">📚 Lo que Aprenderás</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Formación técnica:</strong> 100% enfocada en la práctica.</li>
                            <li><strong>Profesores expertos:</strong> Con experiencia real en cada área.</li>
                            <li><strong>Certificación avalada:</strong> Por SENESCYT y otras entidades.</li>
                            <li><strong>Instalaciones accesibles:</strong> En el corazón de Latacunga.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">🎁 Beneficios Exclusivos</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>✅ Horarios flexibles para adaptarse a ti.</li>
                            <li>✅ Acceso a recursos y materiales prácticos.</li>
                            <li>✅ Comunidad activa y asesoría constante.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/cursos">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
                            🎯 Ver Todos los Cursos
                        </button>
                    </Link>
                </div>
            </div>


            {/* Certificaciones */}
            <div className="text-center m-10 px-4">
                <h1 className="text-xl md:text-2xl font-bold mb-4">
                    Nuestra Academia se encuentra certificada y avalada
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <img src={ministerio} alt="Certificación 1" className="h-24 md:h-32 object-contain" />
                    <img src={senecuy} alt="Certificación 2" className="h-24 md:h-32 object-contain" />
                    <img src={cap} alt="Certificación 3" className="h-24 md:h-32 object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Inicio;
