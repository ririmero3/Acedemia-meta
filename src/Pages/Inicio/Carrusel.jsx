// src/Components/Carrusel.jsx
import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Imágenes promocionales
import cosmetologiaImg from '../../Components/Images/carrusel/cosmetodologia.jpg';
import enfermeriaImg from '../../Components/Images/carrusel/enfermera.jpg';
import barberiaImg from '../../Components/Images/carrusel/barbershop.jpg';
import miradaImg from '../../Components/Images/carrusel/miradaperfecta.jpg';

const promociones = [
  {
    titulo: "Cosmetología y Cosmiatría",
    descripcion: "¡Inscríbete este mes y recibe una paleta ultrasónica gratis!",
    detalle: "Promoción válida a las 5 primeras matrículas.",
    imagen: cosmetologiaImg,
    enlace: "/curso/cosmetologia",
  },
  {
    titulo: "Auxiliar en Enfermería y Farmacia",
    descripcion: "Incluye kit de salud GRATIS con tu matrícula.",
    detalle: "Obtén doble certificación y acceso a bolsa de trabajo.",
    imagen: enfermeriaImg,
    enlace: "/curso/enfermeria",
  },
  {
    titulo: "Curso de Barbería",
    descripcion: "¡A las 5 primeras matrículas GRATIS 🎁máquina Trimmer!",
    detalle: "Aprende cortes, fades y cuidado de barba profesional.",
    imagen: barberiaImg,
    enlace: "/curso/barberia",
  },
  {
    titulo: "Curso Mirada Perfecta",
    descripcion: "Kit de materiales gratis para las primeras 5 matrículas.",
    detalle: "Extensiones, lifting, diseño de cejas y más.",
    imagen: miradaImg,
    enlace: "/curso/mirada",
  },
];

const Carrusel = () => {
  useEffect(() => {
    promociones.forEach(promo => {
      const img = new Image();
      img.src = promo.imagen;
    });
  }, []);
  return (
    <Carousel
      showArrows={true}
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      {promociones.map((promo, index) => (
        <div key={index} className="relative">
          <img
            src={promo.imagen}
            alt={promo.titulo}
            className="object-cover object-[center_30%] w-full h-[500px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start">
            <div className="ml-[10%] max-w-xl text-white">
              <h2 className="text-4xl font-bold">{promo.titulo}</h2>
              <p className="mt-2 text-lg">{promo.descripcion}</p>
              <p className="mt-1 text-sm text-red-200 font-semibold">{promo.detalle}</p>
              <a
                href={promo.enlace}
                className="inline-block mt-4 bg-red-500 hover:bg-red-400 text-white px-6 py-2 rounded"
              >
                Información
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;
