// src/data/cursosData.js

import cosmetologiaImg from "../../Components/Images/cursos/cosmetologia.jpg";
import enfermeriaImg from "../../Components/Images/cursos/enfermeria.jpg";
import bellezaIntegralImg from "../../Components/Images/cursos/belleza integral.jpg";
import unasImg from "../../Components/Images/cursos/unas.jpg";
import barberiaImg from "../../Components/Images/cursos/barbershop.jpg";
import esteticaIntegralImg from "../../Components/Images/cursos/estetica integral.jpg";
import masajesImg from "../../Components/Images/cursos/masajes.jpg";
import miradaPerfectaImg from "../../Components/Images/cursos/mirada perfecta.jpg";
import electricidadImg from "../../Components/Images/cursos/electricidad.jpg";

const cursos = [
  {
    id: 1,
    titulo: 'CARRERA DE COSMETOLOGÍA Y COSMIATRÍA',
    descripcion: '2 en 1. Aprende desde drenaje linfático hasta aparatología avanzada.',
    imagen: cosmetologiaImg,
    slug: 'cosmetologia',
  },
  {
    id: 2,
    titulo: 'CURSO AUXILIAR ENFERMERÍA Y FARMACIA',
    descripcion: 'Obtén 2 certificaciones. Clases sábados. Bolsa de trabajo incluida.',
    imagen: enfermeriaImg,
    slug: 'enfermeria',
  },
  {
    id: 3,
    titulo: 'CURSO DE BELLEZA INTEGRAL',
    descripcion: 'Incluye maquillaje, peinados, corte y coloración. Clases prácticas.',
    imagen: bellezaIntegralImg,
    slug: 'belleza-integral',
  },
  {
    id: 4,
    titulo: 'CURSO DE TÉCNICA DE UÑAS',
    descripcion: 'Aprende uñas acrílicas, semipermanentes y decoración profesional.',
    imagen: unasImg,
    slug: 'tecnica-unas',
  },
  {
    id: 5,
    titulo: 'CURSO DE BARBERÍA PROFESIONAL',
    descripcion: 'Corte clásico y moderno, fades, barbería con máquina y navaja.',
    imagen: barberiaImg,
    slug: 'barberia',
  },
  {
    id: 6,
    titulo: 'CURSO DE ESTÉTICA INTEGRAL',
    descripcion: 'Tratamientos faciales, corporales y aparatología estética moderna.',
    imagen: esteticaIntegralImg,
    slug: 'estetica-integral',
  },
  {
    id: 7,
    titulo: 'CURSO DE MASAJES TERAPÉUTICOS',
    descripcion: 'Masoterapia, relajación, descontracturante, drenaje linfático.',
    imagen: masajesImg,
    slug: 'masajes-terapeuticos',
  },
  {
    id: 8,
    titulo: 'CURSO DE MIRADA PERFECTA',
    descripcion: 'Diseño de cejas, lifting de pestañas, microblading y más.',
    imagen: miradaPerfectaImg,
    slug: 'mirada-perfecta',
  },
  {
    id: 9,
    titulo: 'CURSO DE ELECTRICIDAD GENERAL',
    descripcion: 'Instalaciones básicas, lectura de planos y seguridad eléctrica.',
    imagen: electricidadImg,
    slug: 'electricidad',
  },
];

export default cursos;
