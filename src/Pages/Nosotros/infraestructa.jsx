// src/Pages/Infraestructura.jsx
import React, { useEffect } from 'react';
import instalacionesImg from '../../Components/Images/instalaciones.jpg'; // Cambia por tu imagen real

const Infraestructura = () => {

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Nuestras Instalaciones</h1>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-center border border-gray-200">
                {/* Imagen */}
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img
                        src={instalacionesImg}
                        alt="Instalaciones"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2 p-6 md:p-10">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Ubicación</h2>
                    <p className="text-gray-700 mb-3">
                        📍 Calle Juan Abel Echeverría y Quito junto a la pizzería D' Angelo de la Merced , Latacunga, Ecuador
                    </p>
                    <p className="text-gray-600">
                        Contamos con modernas aulas, salones especializados y zonas de práctica equipadas con tecnología de punta para garantizar una formación completa y actualizada.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infraestructura;
