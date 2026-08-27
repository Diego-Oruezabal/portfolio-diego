import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image
                    src="/home-4.png"
                    priority
                    width="800"
                    height="800"
                    alt="Ilustración de Diego Oruezabal trabajando con tecnología"
                />

                <div className="flex flex-col justify-center max-w-md">
                    <h1
                        className="mb-5 text-2xl font-bold leading-tight text-center md:text-left md:text-4xl md:mb-10"
                        aria-label="Conecto negocio y tecnología para resolver problemas reales"
                    >
                        <span aria-hidden="true">
                            Conecto
                            <TypeAnimation
                                sequence={[
                                    "negocio con tecnología",
                                    1400,
                                    "problemas con soluciones",
                                    1400,
                                    "procesos con resultados",
                                    1400,
                                    "cumplimiento con eficiencia",
                                    1400,
                                    "cloud con seguridad",
                                    1400,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="block min-h-[2.5em] text-secondary"
                            />
                        </span>
                    </h1>

                    <p className="mx-auto mb-4 text-xl md:mx-0 md:mb-8">
                        Profesional con más de diez años de experiencia en{" "}
                        <span className="font-bold text-orange-400">
                            dirección, operaciones y calidad
                        </span>
                        , además de formación en{" "}
                        <span className="font-bold text-orange-400">
                            Desarrollo de Aplicaciones Web
                        </span>
                        .
                    </p>

                    <p className="mx-auto mb-4 text-xl md:mx-0 md:mb-8">
                        Construyo soluciones orientadas al cumplimiento, la eficiencia y la mejora de procesos, mientras desarrollo mi especialización en cloud y ciberseguridad.
                    </p>

                    <p className="mx-auto my-2 text-lg italic text-gray-300 md:text-xl md:mx-0">
                        Mi enfoque: comprender el problema, construir una solución útil y demostrar su impacto.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a
                            href="/es/portfolio"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="/es/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Contacta conmigo
                        </a>
                        <a
                            href="https://elpatronsingleton.diegooru.com/"
                            className="relative px-4 py-2 my-5 text-white transition-all border-2 text-md w-fit rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-white/50"
                        >
                            Visita mi Blog
                            <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full animate-bounce">
                                Nuevo
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
