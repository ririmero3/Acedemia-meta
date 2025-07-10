// src/Pages/MisionYVision.jsx
import React, { useEffect } from 'react';
import visionImg from '../../Components/Images/vision.png'; // Cambia por tu imagen real
import misionImg from '../../Components/Images/mision.jpg'; // Cambia por tu imagen real

const MisionYVision = () => {
    return (
        
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Misión y Visión</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


                {/* MISIÓN */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200">
                    <img
                        src={misionImg}
                        alt="Misión"
                        className="h-48 w-full object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-red-600 mb-2">Nuestra Misión</h2>
                    <p className="text-gray-700 text-base">
                        Brindar educación de calidad, accesible y práctica, que fomente el emprendimiento, la creatividad y el desarrollo profesional de nuestros estudiantes.
                    </p>
                </div>
                {/* VISIÓN */}
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-200">
                    <img
                        src={visionImg}
                        alt="Visión"
                        className="h-48 w-full object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-red-600 mb-2">Nuestra Visión</h2>
                    <p className="text-gray-700 text-base">
                        Ser una institución líder en formación profesional que inspire a las personas a alcanzar su máximo potencial y transformar sus vidas a través de la educación integral.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default MisionYVision;
