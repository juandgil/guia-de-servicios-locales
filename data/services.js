// Datos mock para servicios
const services = [
    {
        id: 1,
        name: "Electricista Profesional",
        category: "electricistas",
        categoryName: "Electricista",
        description: "Servicios de instalación y reparación eléctrica para hogares y negocios. Atención rápida y trabajos garantizados.",
        longDescription: "Ofrecemos servicios profesionales de instalación, mantenimiento y reparación eléctrica tanto para hogares como para negocios. Nuestro equipo de electricistas certificados está disponible para urgencias 24/7. Todos nuestros trabajos cuentan con garantía y utilizamos materiales de primera calidad para asegurar instalaciones seguras y duraderas.",
        image: "img/services/electricista.jpg",
        images: [
            "img/services/electricista.jpg",
            "img/services/electricista-2.jpg",
            "img/services/electricista-3.jpg",
            "img/services/electricista-4.jpg"
        ],
        rating: 4.8,
        reviewCount: 24,
        location: "Centro, Ciudad",
        phone: "123-456-7890",
        email: "contacto@electricistapro.com",
        website: "www.electricistapro.com",
        featured: true,
        schedule: {
            monday: "9:00 AM - 6:00 PM",
            tuesday: "9:00 AM - 6:00 PM",
            wednesday: "9:00 AM - 6:00 PM",
            thursday: "9:00 AM - 6:00 PM",
            friday: "9:00 AM - 6:00 PM",
            saturday: "10:00 AM - 2:00 PM",
            sunday: "Cerrado"
        },
        services: [
            {
                name: "Instalación eléctrica residencial",
                description: "Instalación completa para hogares nuevos o renovaciones.",
                price: "Desde $150"
            },
            {
                name: "Reparación de averías",
                description: "Solución rápida para problemas eléctricos en el hogar o negocio.",
                price: "Desde $50"
            },
            {
                name: "Instalación de iluminación",
                description: "Diseño e instalación de sistemas de iluminación personalizados.",
                price: "Desde $80"
            },
            {
                name: "Automatización del hogar",
                description: "Instalación de sistemas inteligentes y control por voz o app.",
                price: "Desde $200"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Carlos Mendoza",
                date: "20 marzo, 2023",
                rating: 5,
                comment: "Excelente servicio, muy profesional y puntual. El trabajo quedó perfecto y a un precio justo. Definitivamente lo recomendaría."
            },
            {
                id: 2,
                name: "Laura Gómez",
                date: "15 febrero, 2023",
                rating: 4,
                comment: "Muy buen trabajo, resolvió todos los problemas eléctricos que tenía en casa. Puntual y profesional. Le quito una estrella porque tardó un poco más de lo previsto."
            },
            {
                id: 3,
                name: "Miguel Ángel Torres",
                date: "3 enero, 2023",
                rating: 4.5,
                comment: "Contratamos sus servicios para la instalación eléctrica completa de nuestra nueva casa. El trabajo es impecable y el precio fue competitivo. Muy recomendado."
            }
        ]
    },
    {
        id: 2,
        name: "Mecánico Automotriz Express",
        category: "mecanicos",
        categoryName: "Mecánico",
        description: "Servicio de mecánica automotriz a domicilio. Diagnóstico gratuito y precios justos para todo tipo de vehículos.",
        longDescription: "Somos un servicio de mecánica automotriz que llega hasta donde estés. Ofrecemos diagnóstico gratuito, reparaciones, mantenimiento preventivo y correctivo para todo tipo de vehículos. Nuestros técnicos están certificados y utilizamos equipos de diagnóstico de última generación para garantizar un servicio de calidad.",
        image: "img/services/mecanico.jpg",
        images: [
            "img/services/mecanico.jpg",
            "img/services/mecanico-2.jpg",
            "img/services/mecanico-3.jpg"
        ],
        rating: 4.6,
        reviewCount: 18,
        location: "Norte, Ciudad",
        phone: "123-456-7891",
        email: "contacto@mecanicoexpress.com",
        website: "www.mecanicoexpress.com",
        featured: true,
        schedule: {
            monday: "8:00 AM - 7:00 PM",
            tuesday: "8:00 AM - 7:00 PM",
            wednesday: "8:00 AM - 7:00 PM",
            thursday: "8:00 AM - 7:00 PM",
            friday: "8:00 AM - 7:00 PM",
            saturday: "9:00 AM - 3:00 PM",
            sunday: "Cerrado"
        },
        services: [
            {
                name: "Mantenimiento preventivo",
                description: "Cambio de aceite, filtros, revisión general del vehículo.",
                price: "Desde $80"
            },
            {
                name: "Diagnóstico computarizado",
                description: "Detección de fallas con equipo especializado.",
                price: "Desde $40"
            },
            {
                name: "Reparación de frenos",
                description: "Cambio de pastillas, discos, ajustes y más.",
                price: "Desde $100"
            },
            {
                name: "Servicio a domicilio",
                description: "Atención donde te encuentres para emergencias.",
                price: "Desde $60"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Roberto Sánchez",
                date: "10 abril, 2023",
                rating: 5,
                comment: "Me salvaron de una emergencia en la carretera. Llegaron rápido y solucionaron el problema de forma eficiente. Excelente servicio."
            },
            {
                id: 2,
                name: "Ana María López",
                date: "22 marzo, 2023",
                rating: 4,
                comment: "Buen servicio y precio justo. El mecánico fue muy profesional y explicó detalladamente el problema y la solución."
            }
        ]
    },
    {
        id: 3,
        name: "Banda Musical Los Fenix",
        category: "musicos",
        categoryName: "Músicos",
        description: "Grupo musical versátil para todo tipo de eventos. Amplio repertorio y equipo profesional de sonido e iluminación.",
        longDescription: "Somos una banda con más de 10 años de experiencia amenizando todo tipo de eventos sociales. Contamos con un amplio repertorio que incluye diversos géneros musicales para complacer todos los gustos. Disponemos de equipo profesional de sonido e iluminación para garantizar un espectáculo de calidad.",
        image: "img/services/banda.jpg",
        images: [
            "img/services/banda.jpg",
            "img/services/banda-2.jpg",
            "img/services/banda-3.jpg",
            "img/services/banda-4.jpg"
        ],
        rating: 4.9,
        reviewCount: 32,
        location: "Servicio a domicilio",
        phone: "123-456-7892",
        email: "contacto@losfenix.com",
        website: "www.bandalosfenix.com",
        featured: true,
        schedule: {
            monday: "10:00 AM - 8:00 PM (para consultas)",
            tuesday: "10:00 AM - 8:00 PM (para consultas)",
            wednesday: "10:00 AM - 8:00 PM (para consultas)",
            thursday: "10:00 AM - 8:00 PM (para consultas)",
            friday: "Disponible para eventos",
            saturday: "Disponible para eventos",
            sunday: "Disponible para eventos"
        },
        services: [
            {
                name: "Bodas y ceremonias",
                description: "Música en vivo para ceremonias y recepción de bodas.",
                price: "Desde $500"
            },
            {
                name: "Fiestas corporativas",
                description: "Amenización de eventos empresariales con repertorio adaptado.",
                price: "Desde $450"
            },
            {
                name: "Cumpleaños y aniversarios",
                description: "Celebraciones especiales con música personalizada.",
                price: "Desde $400"
            },
            {
                name: "Paquete completo",
                description: "Incluye sonido, iluminación y 4 horas de música en vivo.",
                price: "Desde $600"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Ana Torres",
                date: "5 mayo, 2023",
                rating: 5,
                comment: "Gracias a esta banda, la boda de mi hija fue un éxito total. Todos los invitados quedaron encantados y bailaron toda la noche. ¡100% recomendados!"
            },
            {
                id: 2,
                name: "Javier Morales",
                date: "12 abril, 2023",
                rating: 5,
                comment: "Los contraté para un evento corporativo y fueron muy profesionales. Gran repertorio musical y excelente sonido."
            },
            {
                id: 3,
                name: "Patricia Vega",
                date: "28 febrero, 2023",
                rating: 4.5,
                comment: "Muy buena banda para fiestas. Crearon un ambiente espectacular en mi fiesta de cumpleaños."
            }
        ]
    },
    {
        id: 4,
        name: "Plomero 24/7",
        category: "plomeros",
        categoryName: "Plomero",
        description: "Servicio de plomería de emergencia disponible las 24 horas. Reparaciones, instalaciones y mantenimiento de sistemas de agua.",
        longDescription: "Ofrecemos servicios profesionales de plomería residencial y comercial con disponibilidad las 24 horas para emergencias. Nuestro equipo está especializado en la reparación de fugas, destape de cañerías, instalación de sistemas hidráulicos y sanitarios, y mantenimiento preventivo.",
        image: "img/services/plomero.jpg",
        images: [
            "img/services/plomero.jpg",
            "img/services/plomero-2.jpg",
            "img/services/plomero-3.jpg"
        ],
        rating: 4.7,
        reviewCount: 21,
        location: "Sur, Ciudad",
        phone: "123-456-7893",
        email: "contacto@plomero24.com",
        website: "www.plomero24.com",
        featured: false,
        schedule: {
            monday: "8:00 AM - 8:00 PM",
            tuesday: "8:00 AM - 8:00 PM",
            wednesday: "8:00 AM - 8:00 PM",
            thursday: "8:00 AM - 8:00 PM",
            friday: "8:00 AM - 8:00 PM",
            saturday: "9:00 AM - 5:00 PM",
            sunday: "Solo emergencias"
        },
        services: [
            {
                name: "Reparación de fugas",
                description: "Detección y reparación de fugas de agua visibles y ocultas.",
                price: "Desde $60"
            },
            {
                name: "Destape de cañerías",
                description: "Limpieza de tuberías obstruidas con equipo profesional.",
                price: "Desde $70"
            },
            {
                name: "Instalación de sistemas",
                description: "Instalación de nuevos sistemas hidráulicos y sanitarios.",
                price: "Desde $150"
            },
            {
                name: "Mantenimiento preventivo",
                description: "Revisión y mantenimiento para prevenir problemas futuros.",
                price: "Desde $80"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Eduardo Méndez",
                date: "17 abril, 2023",
                rating: 5,
                comment: "Excelente servicio de emergencia. Llegaron en menos de 30 minutos y resolvieron una fuga que podría haber causado un desastre. Muy profesionales."
            },
            {
                id: 2,
                name: "Mariana Ortiz",
                date: "3 marzo, 2023",
                rating: 4,
                comment: "Buen servicio para la instalación de mi nuevo baño. El trabajo quedó muy bien hecho y a un precio razonable."
            }
        ]
    },
    {
        id: 5,
        name: "Carpintería Artesanal",
        category: "carpinteros",
        categoryName: "Carpintero",
        description: "Fabricación de muebles a medida y restauración de piezas antiguas. Trabajos en madera de alta calidad con diseños personalizados.",
        longDescription: "Somos un taller de carpintería especializado en la fabricación de muebles a medida y restauración de piezas antiguas. Trabajamos con las mejores maderas y ofrecemos diseños personalizados según las necesidades de cada cliente. Nuestra experiencia de más de 15 años nos permite garantizar acabados de alta calidad y durabilidad.",
        image: "img/services/carpintero.jpg",
        images: [
            "img/services/carpintero.jpg",
            "img/services/carpintero-2.jpg",
            "img/services/carpintero-3.jpg"
        ],
        rating: 4.8,
        reviewCount: 16,
        location: "Este, Ciudad",
        phone: "123-456-7894",
        email: "contacto@carpinteriaartesanal.com",
        website: "www.carpinteriaartesanal.com",
        featured: false,
        schedule: {
            monday: "9:00 AM - 6:00 PM",
            tuesday: "9:00 AM - 6:00 PM",
            wednesday: "9:00 AM - 6:00 PM",
            thursday: "9:00 AM - 6:00 PM",
            friday: "9:00 AM - 6:00 PM",
            saturday: "9:00 AM - 2:00 PM",
            sunday: "Cerrado"
        },
        services: [
            {
                name: "Muebles a medida",
                description: "Diseño y fabricación de muebles personalizados para hogar u oficina.",
                price: "Según diseño"
            },
            {
                name: "Restauración",
                description: "Recuperación y restauración de piezas antiguas o dañadas.",
                price: "Desde $100"
            },
            {
                name: "Puertas y ventanas",
                description: "Fabricación e instalación de puertas y ventanas de madera.",
                price: "Desde $200"
            },
            {
                name: "Diseño de interiores en madera",
                description: "Proyectos completos para revestimientos y decoración.",
                price: "Según proyecto"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Isabel Ramírez",
                date: "20 marzo, 2023",
                rating: 5,
                comment: "Hicieron un mueble para mi sala exactamente como lo imaginaba. Excelente calidad, acabados perfectos y cumplieron con el tiempo de entrega."
            },
            {
                id: 2,
                name: "Gabriel Jiménez",
                date: "5 febrero, 2023",
                rating: 4.5,
                comment: "Restauraron un escritorio antiguo familiar y quedó como nuevo. Respetaron todas las características originales y el precio fue justo."
            }
        ]
    },
    {
        id: 6,
        name: "Jardines Verdes",
        category: "jardineros",
        categoryName: "Jardinero",
        description: "Diseño, mantenimiento y renovación de jardines. Especialistas en paisajismo y sistemas de riego automatizado.",
        longDescription: "Ofrecemos servicios completos de jardinería para espacios residenciales y comerciales. Nuestro equipo está especializado en diseño de jardines, instalación y mantenimiento de áreas verdes, sistemas de riego automatizado, y control de plagas. Trabajamos con las mejores plantas y materiales para garantizar jardines hermosos y duraderos.",
        image: "img/services/jardinero.jpg",
        images: [
            "img/services/jardinero.jpg",
            "img/services/jardinero-2.jpg",
            "img/services/jardinero-3.jpg"
        ],
        rating: 4.7,
        reviewCount: 19,
        location: "Oeste, Ciudad",
        phone: "123-456-7895",
        email: "contacto@jardinesverdes.com",
        website: "www.jardinesverdes.com",
        featured: false,
        schedule: {
            monday: "8:00 AM - 5:00 PM",
            tuesday: "8:00 AM - 5:00 PM",
            wednesday: "8:00 AM - 5:00 PM",
            thursday: "8:00 AM - 5:00 PM",
            friday: "8:00 AM - 5:00 PM",
            saturday: "8:00 AM - 12:00 PM",
            sunday: "Cerrado"
        },
        services: [
            {
                name: "Diseño de jardines",
                description: "Creación de espacios verdes personalizados según el espacio y preferencias.",
                price: "Desde $200"
            },
            {
                name: "Mantenimiento mensual",
                description: "Servicio regular de cuidado de jardines existentes.",
                price: "Desde $80/mes"
            },
            {
                name: "Sistemas de riego",
                description: "Instalación de sistemas automáticos para optimizar el riego.",
                price: "Desde $150"
            },
            {
                name: "Control de plagas",
                description: "Tratamientos preventivos y correctivos para plantas y césped.",
                price: "Desde $60"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Lucía Hernández",
                date: "15 abril, 2023",
                rating: 5,
                comment: "Transformaron mi jardín en un espacio precioso. Muy profesionales, puntuales y con excelentes sugerencias para mejorar mi área verde."
            },
            {
                id: 2,
                name: "Ricardo Vargas",
                date: "28 febrero, 2023",
                rating: 4,
                comment: "Contrato su servicio de mantenimiento mensual y estoy muy satisfecho. Mi jardín siempre luce impecable y han sido muy responsables."
            }
        ]
    },
    {
        id: 7,
        name: "Pintores Profesionales",
        category: "pintores",
        categoryName: "Pintor",
        description: "Servicios de pintura interior y exterior para hogares y negocios. Acabados de calidad y asesoría en selección de colores.",
        longDescription: "Somos un equipo de pintores profesionales con amplia experiencia en trabajos residenciales y comerciales. Ofrecemos servicios de pintura interior y exterior, aplicación de texturas, remoción de papel tapiz, y restauración de superficies dañadas. Utilizamos productos de primera calidad para garantizar acabados duraderos y perfectos.",
        image: "img/services/pintor.jpg",
        images: [
            "img/services/pintor.jpg",
            "img/services/pintor-2.jpg",
            "img/services/pintor-3.jpg"
        ],
        rating: 4.6,
        reviewCount: 22,
        location: "Centro-Sur, Ciudad",
        phone: "123-456-7896",
        email: "contacto@pintoresprofesionales.com",
        website: "www.pintoresprofesionales.com",
        featured: false,
        schedule: {
            monday: "8:00 AM - 6:00 PM",
            tuesday: "8:00 AM - 6:00 PM",
            wednesday: "8:00 AM - 6:00 PM",
            thursday: "8:00 AM - 6:00 PM",
            friday: "8:00 AM - 6:00 PM",
            saturday: "9:00 AM - 3:00 PM",
            sunday: "Cerrado"
        },
        services: [
            {
                name: "Pintura interior",
                description: "Pintado de espacios interiores con preparación de superficies.",
                price: "Desde $3/m²"
            },
            {
                name: "Pintura exterior",
                description: "Trabajos en fachadas y exteriores con tratamientos especiales.",
                price: "Desde $4/m²"
            },
            {
                name: "Aplicación de texturas",
                description: "Acabados texturizados decorativos para paredes.",
                price: "Desde $5/m²"
            },
            {
                name: "Restauración de superficies",
                description: "Reparación y preparación de superficies dañadas antes de pintar.",
                price: "Desde $2/m²"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Carmen Rodríguez",
                date: "10 abril, 2023",
                rating: 5,
                comment: "Excelente trabajo con la pintura de mi casa. Fueron muy detallistas, limpios y organizados. El resultado es justo lo que quería."
            },
            {
                id: 2,
                name: "Daniel Martínez",
                date: "15 marzo, 2023",
                rating: 4,
                comment: "Pintaron mi oficina y quedó muy bien. Trabajaron rápido y con mínimas molestias para nuestras operaciones diarias."
            }
        ]
    },
    {
        id: 8,
        name: "Limpieza Express",
        category: "limpieza",
        categoryName: "Limpieza",
        description: "Servicios de limpieza profunda para hogares y oficinas. Incluye limpieza de tapicería, vidrios y áreas especiales.",
        longDescription: "Ofrecemos servicios profesionales de limpieza para hogares y espacios comerciales. Nuestro equipo está capacitado para realizar limpieza profunda, sanitización, limpieza de tapicerías y alfombras, y tratamiento de pisos. Utilizamos productos biodegradables y equipos de última generación para garantizar resultados impecables y seguros.",
        image: "img/services/limpieza.jpg",
        images: [
            "img/services/limpieza.jpg",
            "img/services/limpieza-2.jpg",
            "img/services/limpieza-3.jpg"
        ],
        rating: 4.5,
        reviewCount: 28,
        location: "Toda la ciudad",
        phone: "123-456-7897",
        email: "contacto@limpiezaexpress.com",
        website: "www.limpiezaexpress.com",
        featured: false,
        schedule: {
            monday: "7:00 AM - 7:00 PM",
            tuesday: "7:00 AM - 7:00 PM",
            wednesday: "7:00 AM - 7:00 PM",
            thursday: "7:00 AM - 7:00 PM",
            friday: "7:00 AM - 7:00 PM",
            saturday: "8:00 AM - 5:00 PM",
            sunday: "Solo con cita previa"
        },
        services: [
            {
                name: "Limpieza del hogar",
                description: "Servicio completo para casas y apartamentos.",
                price: "Desde $70"
            },
            {
                name: "Limpieza de oficinas",
                description: "Mantenimiento regular o limpieza profunda para espacios de trabajo.",
                price: "Desde $0.5/m²"
            },
            {
                name: "Limpieza de tapicería",
                description: "Lavado profesional de sofás, sillas y otros muebles tapizados.",
                price: "Desde $40/pieza"
            },
            {
                name: "Limpieza post-construcción",
                description: "Servicio especializado para nuevas construcciones o remodelaciones.",
                price: "Desde $100"
            }
        ],
        reviews: [
            {
                id: 1,
                name: "Sofía Álvarez",
                date: "22 abril, 2023",
                rating: 5,
                comment: "Contratamos la limpieza post-construcción y dejaron la casa impecable. Muy profesionales y meticulosos con cada detalle."
            },
            {
                id: 2,
                name: "Jorge Delgado",
                date: "10 marzo, 2023",
                rating: 4,
                comment: "Buen servicio para la limpieza regular de nuestra oficina. Puntuales y eficientes."
            }
        ]
    }
];

// Función para obtener servicios destacados
function getFeaturedServices() {
    return services.filter(service => service.featured);
}

// Función para obtener servicios por categoría
function getServicesByCategory(category) {
    if (category === 'todos') {
        return services;
    }
    return services.filter(service => service.category === category);
}

// Función para obtener un servicio por su ID
function getServiceById(id) {
    return services.find(service => service.id === parseInt(id));
}

// Función para obtener servicios relacionados
function getRelatedServices(id, category) {
    return services.filter(service => service.id !== parseInt(id) && service.category === category).slice(0, 3);
}

// Función para obtener todas las categorías únicas
function getAllCategories() {
    const categories = [
        { id: "musicos", name: "Músicos", icon: "fas fa-music" },
        { id: "electricistas", name: "Electricistas", icon: "fas fa-bolt" },
        { id: "mecanicos", name: "Mecánicos", icon: "fas fa-car" },
        { id: "plomeros", name: "Plomeros", icon: "fas fa-faucet" },
        { id: "carpinteros", name: "Carpinteros", icon: "fas fa-hammer" },
        { id: "jardineros", name: "Jardineros", icon: "fas fa-leaf" },
        { id: "pintores", name: "Pintores", icon: "fas fa-paint-roller" },
        { id: "limpieza", name: "Servicios de Limpieza", icon: "fas fa-broom" }
    ];
    
    return categories;
}

// Función para buscar servicios
function searchServices(query) {
    query = query.toLowerCase();
    return services.filter(service => 
        service.name.toLowerCase().includes(query) || 
        service.description.toLowerCase().includes(query) || 
        service.category.toLowerCase().includes(query)
    );
} 