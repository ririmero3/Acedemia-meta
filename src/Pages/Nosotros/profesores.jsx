import React, { useEffect } from 'react';
import profe1 from '../../Components/Images/profesores/profe1.jpg'; // Reemplaza por tus imágenes reales
import profe2 from '../../Components/Images/profesores/profe2.jpg';
import profe3 from '../../Components/Images/profesores/profe3.jpg';
import profe4 from '../../Components/Images/profesores/profe4.jpg';
import profe5 from '../../Components/Images/profesores/profe5.jpg';

const profesores = [
    {
        nombre: 'Dra. Carolina Sánchez',
        materia: 'Cosmetología y Estética',
        imagen: profe1
    },
    {
        nombre: 'Ing. Andrés Tapia',
        materia: 'Marketing Digital',
        imagen: profe2
    },
    {
        nombre: 'Lic. Mariana López',
        materia: 'Maquillaje Profesional',
        imagen: profe3
    },
    {
        nombre: 'MSc. Pablo Gómez',
        materia: 'Emprendimiento y Finanzas',
        imagen: profe4
    },
    {
        nombre: 'Lic. Valeria Ruiz',
        materia: 'Atención al Cliente y Ventas',
        imagen: profe5
    }
];

const Profesores = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Nuestro Equipo Docente</h1>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {profesores.map((profesor, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                        <img
                            src={profesor.imagen}
                            alt={profesor.nombre}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-800">{profesor.nombre}</h2>
                            <p className="text-red-600 mt-1 font-medium">{profesor.materia}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profesores;
