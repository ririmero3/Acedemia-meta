
import cosmetologiaImg from "../../Components/Images/cursos/cosmetologia.jpg";
import enfermeriaImg from "../../Components/Images/cursos/enfermeria.jpg";
import bellezaIntegralImg from "../../Components/Images/cursos/belleza integral.jpg";
import unasImg from "../../Components/Images/cursos/unas.jpg";
import barberiaImg from "../../Components/Images/cursos/barbershop.jpg";
import esteticaIntegralImg from "../../Components/Images/cursos/estetica integral.jpg";
import masajesImg from "../../Components/Images/cursos/masajes.jpg";
import miradaPerfectaImg from "../../Components/Images/cursos/mirada perfecta.jpg";
import electricidadImg from "../../Components/Images/cursos/electricidad.jpg";

const cursosData = [
    {
      slug: 'cosmetologia',
      titulo: 'Carrera de Cosmetología y Cosmiatría (2 en 1)',
      imagen: cosmetologiaImg,
      duracion: '12 meses',
      matricula: '$50 (incluye GRATIS PALETA ULTRASÓNICA a las 5 primeras matrículas)',
      mensualidad: '$60 (incluye aparatología)',
      horarios: ['Jueves de 9am a 12pm', 'Domingo de 9am a 12pm'],
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: [
        'Cámara artesanal',
        'Visualización en SENESCYT',
        'Ministerio de Trabajo'
      ],
      temas: [
        'Drenaje linfático',
        'Tratamientos reductores',
        'Masajes relajantes',
        'Masoterapia, maderoterapia',
        'Reafirmación de busto y levantamiento de glúteos',
        'Limpiezas faciales',
        'Hidratación del rostro',
        'Tratamientos para acné y manchas',
        'Biotipos y fototipos faciales',
        'Anatomía corporal, lesiones de la piel, nutrición',
        'Skin Care, mascarillas, principios activos',
        'Valoración corporal, índice de masa corporal',
        'Diagnóstico cutáneo, manejo de ácidos, flacidez',
        'Celulitis, estrías, rejuvenecimiento',
        'Aparatología: microdermoabrasión, alta frecuencia, ultrasonido, vacuum, paleta ultrasónica, máscara LED, arco LED, dermapen, radiofrecuencia'
      ]
    },
    {
      slug: 'enfermeria',
      titulo: 'Curso Especializado en Auxiliar de Enfermería y Auxiliar de Farmacia',
      imagen: enfermeriaImg,
      duracion: '12 meses',
      matricula: '$50 (KIT DE SALUD GRATIS)',
      mensualidad: '$60',
      horarios: ['Sábados de 8:00am a 11:00am'],
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        'Copia de título de bachiller',
        'Valor de matrícula'
      ],
      certificacion: [
        'Universidad de las Américas',
        'Diplomado internacional Tecnológico de Monterrey'
      ],
      temas: [
        'Formación completa en salud y farmacia',
        'Docentes profesionales',
        'Bolsa de trabajo disponible'
      ]
    },
    {
      slug: 'belleza-integral',
      titulo: 'Belleza Integral y Cosmetología',
      imagen: bellezaIntegralImg,
      duracion: '12 meses',
      matricula: '$60 (Kit GRATIS para 5 primeras matrículas)',
      mensualidad: '$75',
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: ['SENESCYT', 'Ministerio de Trabajo', 'Cámara artesanal'],
      temas: [
        'Plasma rico en plaquetas/capilar',
        'Colorimetría capilar, maquillaje',
        'Estilismo, barbería, trenzados',
        'Cejas, pestañas, tratamientos capilares',
        'Tratamientos faciales y corporales: lipo sin cirugía, plasma facial',
        'Técnicas de Spa'
      ]
    },
    {
      slug: 'tecnica-unas',
      titulo: 'Curso de Técnica de Uñas (Básico y Avanzado)',
      imagen: unasImg,
      duracion: '4 meses',
      matricula: '$25',
      mensualidad: '$12 (semanal)',
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: ['Cámara artesanal', 'SENESCYT', 'Ministerio de Trabajo'],
      temas: ['100% práctico', 'No requiere conocimientos previos']
    },
    {
      slug: 'barberia',
      titulo: 'Curso Barber Shop Profesional',
      imagen: barberiaImg,
      duracion: '4 meses',
      matricula: '$25 (Máquina Trimmer GRATIS a 5 primeras matrículas)',
      mensualidad: '$50',
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: [],
      temas: [
        'Peluquería',
        'Cortes para hombres y mujeres',
        'Barbería clásica y contemporánea',
        'Colorimetría capilar',
        'Cortes urbanos'
      ]
    },
    {
      slug: 'estetica-integral',
      titulo: 'Técnico en Estética Integral',
      imagen: esteticaIntegralImg,
      duracion: '12 meses',
      matricula: '$85 (Kit GRATIS para 6 primeras matrículas)',
      mensualidad: '$149',
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        'Copia de título de bachiller',
        'Valor de matrícula'
      ],
      certificacion: ['Senescyt'],
      temas: [
        'Cosmetología, cosmiatría, belleza integral',
        'Maquillaje profesional, mesoterapia',
        'Diseño de mirada, aparatología',
        'Masajes reductores, estética facial y corporal'
      ]
    },
    {
      slug: 'masajes-terapeuticos',
      titulo: 'Curso Profesional de Masajes Terapéuticos',
      imagen: masajesImg,
      duracion: '5 meses',
      matricula: '$50 (Uniforme GRATIS a 5 primeras matrículas)',
      mensualidad: '$60',
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: [
        'Cámara artesanal',
        'SENESCYT',
        'Ministerio de Trabajo',
        'Permiso de Acess'
      ],
      temas: [
        'Reduce estrés, alivia dolores musculares',
        'Mejora la circulación',
        'Aumenta la flexibilidad y el bienestar general',
        'Terapia profesional con alta demanda'
      ]
    },
    {
      slug: 'mirada-perfecta',
      titulo: 'Curso Mirada Perfecta',
      imagen: miradaPerfectaImg,
      duracion: '3 meses',
      matricula: '$40 (Kit GRATIS para 5 primeras matrículas)',
      mensualidad: '$50',
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: ['Certificado con aval para emprender'],
      temas: [
        'Extensión de pestañas 2D y 3D',
        'Lifting de pestañas',
        'Laminado de cejas',
        'Semipermanente y visajismo',
        'Depilación con hilo'
      ]
    },
    {
      slug: 'electricidad',
      titulo: 'Curso Profesional de Electricidad',
      imagen: electricidadImg,
      duracion: '4 meses',
      matricula: '$40 (Kit GRATIS a 5 primeras matrículas)',
      mensualidad: '$50',
      horarios: ['Martes de 2pm a 5pm', 'Domingo de 12pm a 3pm'],
      requisitos: [
        'Copia de cédula',
        'Papeleta de votación',
        '2 fotos tamaño carnet',
        'Valor de matrícula'
      ],
      certificacion: [],
      temas: [
        'Instalación y reparación eléctrica',
        'Seguridad eléctrica y prevención de riesgos',
        'Lectura de planos eléctricos',
        'Preparación para certificaciones'
      ]
    }
  ];
  
  export default cursosData;
  