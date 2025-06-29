import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Phone, Github, Mail, Ghost } from "lucide-react";


// Datos base para el navbar (sin textos)
const baseItems = [
  { id: 1, icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />, link: { es: "/es", en: "/en" } },
  { id: 2, icon: <UserRound size={25} color="#fff" strokeWidth={1} />, link: { es: "/es/about-me", en: "/en/about-me" } },
  { id: 3, icon: <BookText size={25} color="#fff" strokeWidth={1} />, link: { es: "/es/training", en: "/en/training" } },
  { id: 4, icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />, link: { es: "/es/portfolio", en: "/en/portfolio" } },
  { id: 5, icon: <Ghost size={25} color="#fff" strokeWidth={1} />, link: { es: "/es/technologies", en: "/en/technologies" } },
  { id: 5, icon: <Speech size={25} color="#fff" strokeWidth={1} />, link: { es: "/es/contact", en: "/en/contact" } },
];


// Traducción de los títulos por idioma
const titlesNavbar = {
  es: ["Inicio", "Sobre mí", "Formación", "Portfolio", "Contacto"],
  en: ["Home", "About me", "Training", "Portfolio", "Contact"],
};

// Función para obtener el navbar con los textos según idioma
export function getItemsNavbar(lang: "es" | "en") {
  return baseItems.map((item, index) => ({
    ...item,
    link: item.link[lang], // ← link correcto según idioma
    title: titlesNavbar[lang][index],
  }));
}

export const getDataAboutPage = (lang: "en" | "es") => {
  return lang === "en" ? dataAboutPageEn : dataAboutPage;
};

export const getDataCounter = (lang: "en" | "es") => {
    return lang === "en" ? dataCounterEn : dataCounter;
};

export const getDataTrainingPage = (lang: "en" | "es") =>
  lang === "en" ? dataTrainingPageEn : dataTrainingPage;

export const getCertifications = (lang: "en" | "es") =>
  lang === "en" ? certificationsEn : certifications;

export const getLanguages = (lang: "en" | "es") =>
  lang === "en" ? languagesEn : languages;

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

export const dataAboutPageEn = [
  {
    id: 1,
    title: "Director - Manager",
    subtitle: "Zeibalk 12",
    description:
      "Direction and management of a 15-person team. Responsible for administration, accounting, HR, and quality. Community manager and digital strategy development.",
    date: "2008 - Pres.",
  },
  {
    id: 2,
    title: "Business Manager",
    subtitle: "Banco Santander",
    description:
      "Sales tasks, client acquisition, and portfolio management.",
    date: "2007 - 2008",
  },
  {
    id: 3,
    title: "Labor Department Manager",
    subtitle: "García & Villalobos, Advisory Group",
    description: "Management of labor, taxation, and accounting departments.",
    date: "2006 - 2007",
  },
  {
    id: 4,
    title: "Internal Auditor",
    subtitle: "Terrés construction company",
    description: "Internal accounting audit.",
    date: "2005",
  },
  {
    id: 5,
    title: "Internal Trade, Tourism and Industry Technician",
    subtitle: "Chamber of Commerce of Granada",
    description:
      "Consulting and report writing for public administration. Project development manager.",
    date: "2005",
  },
];

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

export const dataCounterEn = [
    {
        id: 0,
        endCounter: 15,
        text: "Years of business experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Years of Web Development experience",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Completed projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 300,
        text: "Satisfied clients",
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
        title: "Portfolio personal Versión 2.0",
        image: "/image-9.jpg",
        tech: "Next.js, React, Tailwind CSS",
        urlGithub: "https://github.com/Diego-Oruezabal/portfolio-diego",
        urlDemo: "https://doom-portfolio.netlify.app/",
    },
    {
        id: 2,
        title: "Clon de ChatGPT con personalidades",
        image: "/rolGpt.jpg",
        tech: "HTML, JavaScript, CSS",
        urlGithub: "https://github.com/Diego-Oruezabal/rolGpt",
        urlDemo: "https://rolgpt.netlify.app/",
    },
    {
       id: 3,
        title: "Cotizador de Criptomonedas",
        image: "/Crypto.png",
        tech: "HTML, JavaScript, CSS",
        urlGithub: "https://github.com/Diego-Oruezabal/Criptomonedas",
        urlDemo: "https://cripto-cotizator.netlify.app/",
    },
    {
        id: 4,
        title: "Portfolio personal Versión 1.0",
        image: "/portfolio_1.0.png",
        tech: "HTML, CSS",
        urlGithub: "https://github.com/Diego-Oruezabal/portfolio_CV",
        urlDemo: "https://cv-portfolius.netlify.app/",
    },
    {
        id: 5,
        title: "Api-REST",
        image: "/coding.jpg",
        tech: "PHP, Laravel, Blade, MySQL",
        urlGithub: "https://github.com/Diego-Oruezabal/api-project",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Plataforma Cursos",
        image: "/coding.jpg",
        tech: "Next.js, React, PostgreSQL",
        urlGithub: "https://github.com/Diego-Oruezabal/plataforma-cursos",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "E-commerce",
        image: "/coding.jpg",
        tech: "PHP, Laravel, Blade, MySQL",
        urlGithub: "https://github.com/Diego-Oruezabal/Ecommerce",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Control Asistencias",
        image: "/coding.jpg",
        tech: "PHP, Laravel, Blade, MySQL",
        urlGithub: "https://github.com/Diego-Oruezabal/Asist",
        urlDemo: "#!",
    },
   {
        id: 9,
        title: "Portal de Noticias",
        image: "/coding.jpg",
        tech: "Angular, Spring Boot",
        urlGithub: "https://github.com/Diego-Oruezabal/portalNews",
        urlDemo: "#!",
    }
];

export const dataPortfolioEn = [
  {
    id: 1,
    title: "Personal Portfolio Version 2.0",
    image: "/image-9.jpg",
    tech: "Next.js, React, Tailwind CSS",
    urlGithub: "https://github.com/Diego-Oruezabal/portfolio-diego",
    urlDemo: "https://doom-portfolio.netlify.app/",
  },
  {
    id: 2,
    title: "ChatGPT Clone with Personalities",
    image: "/rolGpt.jpg",
    tech: "HTML, JavaScript, CSS",
    urlGithub: "https://github.com/Diego-Oruezabal/rolGpt",
    urlDemo: "https://rolgpt.netlify.app/",
  },
  {
    id: 3,
    title: "Cryptocurrency Quoter",
    image: "/Crypto.png",
    tech: "HTML, JavaScript, CSS",
    urlGithub: "https://github.com/Diego-Oruezabal/Criptomonedas",
    urlDemo: "https://cripto-cotizator.netlify.app/",
  },
  {
    id: 4,
    title: "Personal Portfolio Version 1.0",
    image: "/portfolio_1.0.png",
    tech: "HTML, CSS",
    urlGithub: "https://github.com/Diego-Oruezabal/portfolio_CV",
    urlDemo: "https://cv-portfolius.netlify.app/",
  },
  {
    id: 5,
    title: "REST API",
    image: "/coding.jpg",
    tech: "PHP, Laravel, Blade, MySQL",
    urlGithub: "https://github.com/Diego-Oruezabal/api-project",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Courses Platform",
    image: "/coding.jpg",
    tech: "Next.js, React, PostgreSQL",
    urlGithub: "https://github.com/Diego-Oruezabal/plataforma-cursos",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "E-commerce",
    image: "/coding.jpg",
    tech: "PHP, Laravel, Blade, MySQL",
    urlGithub: "https://github.com/Diego-Oruezabal/Ecommerce",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "Attendance Control",
    image: "/coding.jpg",
    tech: "PHP, Laravel, Blade, MySQL",
    urlGithub: "https://github.com/Diego-Oruezabal/Asist",
    urlDemo: "#!",
  },
  {
    id: 9,
    title: "News Portal",
    image: "/coding.jpg",
    tech: "Angular, Spring Boot",
    urlGithub: "https://github.com/Diego-Oruezabal/portalNews",
    urlDemo: "#!",
  },
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

export const dataContactEn = [
    {
        id: 1,
        title: "Phone",
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
        title: "European Financial Advisor (EFA)",
        subtitle: "Instituto de Estudios Bursátiles (Madrid)",
        description: "",
        date: "2011",
    },
    {
        id: 4,
        title: "Master in Business Administration (MBA)",
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


export const dataTrainingPageEn = [
  {
    id: 1,
    title: "Technician in Web Application Development (DAW)",
    subtitle: "FOC Institute",
    description: "",
    date: "2025",
  },
  {
    id: 2,
    title: "Bachelor's Degree in Computer Engineering",
    subtitle: "Open University of Catalonia",
    description: "Not finished",
    date: "2018",
  },
  {
    id: 3,
    title: "European Financial Advisor (EFA)",
    subtitle: "Institute of Stock Market Studies (Madrid)",
    description: "",
    date: "2011",
  },
  {
    id: 4,
    title: "Master in Business Administration (MBA)",
    subtitle: "European Business School",
    description: "",
    date: "2005",
  },
  {
    id: 5,
    title: "Bachelor’s Degree in Business Administration and Management",
    subtitle: "University of Granada",
    description: "",
    date: "2004",
  },
];


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
export const certificationsEn = [
  { id: 1, title: "Database Foundations", subtitle: "ORACLE", description: "", date: "2024" },
  { id: 2, title: "GNU/Linux Fundamentals", subtitle: "LINUX PROFESSIONAL INSTITUTE (LPI)", description: "", date: "2024" },
  { id: 3, title: "Windows 10 Fundamentals", subtitle: "MICROSOFT IT ACADEMY", description: "", date: "2024" },
  { id: 4, title: "Java Foundations", subtitle: "ORACLE", description: "", date: "2024" },
];
export const languages = [
    {
        id: 1,
        title: "Español",
        subtitle: "Nativo",
        description: "",
        date: "",
    },
     {
        id: 2,
        title: "Inglés",
        subtitle: "British Council",
        description: "B2",
        date: "2020",
    },

]

export const languagesEn = [
  { id: 1, title: "Spanish", subtitle: "Native", description: "", date: "" },
  { id: 2, title: "English", subtitle: "British Council", description: "B2", date: "2020" },
];



