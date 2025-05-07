import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Phone, Github, Mail, Ghost } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/training",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Technologies",
        icon: <Ghost size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
    },
    {
        id: 6,
        title: "Contact",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Director - Gerente",
        subtitle: "Zeibalk 12",
        description: "Dirección y gestión de un equipo de 15 personas. Responsable de administración, contabilidad, laboral y calidad. Community manager y desarrollo de estrategias digitales.",
        date: "2008 - Act. ",
    },
    {
        id: 2,
        title: "Gerente de empresas",
        subtitle: "Banco Santander",
        description: "Labores comerciales, captación y gestión de cartera de clientes.",
        date: "2007 - 2008",
    },
    {
        id: 3,
        title: "Responsable del área laboral ",
        subtitle: "García & Villalobos, Grupo Asesor",
        description: "Dirección del área laboral, fiscalidad y contabilidad.",
        date: "2006 - 2007",
    },
    {
        id: 4,
        title: "Auditor Interno",
        subtitle: "Constructora Terrés",
        description: "Auditoría interna de contabilidad.",
        date: "2005",
    },
    {
        id: 5,
        title: "Técnico de Comercio Interior, Turismo e Industria",
        subtitle: "Cámara de Comercio, Industria y Navegación de Granada",
        description: "Asesoramiento y elaboración de informes para la Administración. Responsable de desarrollo de proyectos.",
        date: "2005",
        
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 15,
        text: "Años de experiencia empresarial",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Años experiencia Desarrollo Web",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 300,
        text: "Clientes satisfechos",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Portfolio personal",
        image: "/image-9.jpg",
        urlGithub: "https://github.com/Diego-Oruezabal/portfolio-diego",
        urlDemo: "https://doom-portfolio.netlify.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 666 07 65 57",
        link: "tel:+34666076557",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/Diego-Oruezabal",
        link: "https://github.com/Diego-Oruezabal",
        icon: <Github />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "diegooruezabal@gmail.com",
        link: "mailto:diegooruezabal@gmail.com",
        icon: <Mail/>,
    },
];

export const dataTrainingPage = [
    {
        id: 1,
        title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
        subtitle: "Instituto FOC",
        description: "",
        date: "2025",
    },
    {
        id: 2,
        title: "Estudios en Grado de Ingeniería Informática",
        subtitle: "Universitat Oberta Catalunya",
        description: "Sin finalizar",
        date: "2018",
    },
    {
        id: 3,
        title: "Asesoramiento Financiero (EFA)",
        subtitle: "Instituto de Estudios Bursátiles (Madrid)",
        description: "",
        date: "2011",
    },
    {
        id: 4,
        title: "MBA - Master in Business Administration",
        subtitle: "Escuela Europea de Negocios",
        description: "",
        date: "2005",
    },
    {
        id: 5,
        title: "Licenciado en Administración y Dirección de Empresas",
        subtitle: "Universidad de Granada",
        description: "",
        date: "2004",
        
    },
]

export const certifications = [
    {
        id: 1,
        title: "Database Foundations",
        subtitle: "ORACLE",
        description: "",
        date: "2024",
    },
    {
        id: 2,
        title: "Fundamentos GNU/Linux",
        subtitle: "LINUX PROFESSIIONAL INSTITUTE (LPI)",
        description: "",
        date: "2024",
    },
    {
        id: 3,
        title: "Fundamentos Windows 10",
        subtitle: "MICROSOFT IT ACADEMY",
        description: "",
        date: "2024",
    },

    {
        id: 4,
        title: "Java Foundations",
        subtitle: "ORACLE",
        description: "",
        date: "2024",
        
    },
]
export const languages = [
    {
        id: 1,
        title: "Inglés",
        subtitle: "British Council",
        description: "B2",
        date: "2020",
    },

]