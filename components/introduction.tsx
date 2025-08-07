import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
               
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Transformo, <br />
                        <TypeAnimation
                            sequence={[
                                'código en impacto',
                                1000,
                                'ideas en soluciones',
                                1000,
                                'datos en decisiones',
                                1000,
                                'retos en resultados',
                                1000,
                                'visión en realidad',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-4 text-xl md:text-xl md:mx-0 md:mb-8">
                    Desarrollador de software con formación en <span className="font-bold text-orange-400">Administración y Dirección de Empresas (ADE)</span>, Master <span className="font-bold text-orange-400">MBA</span> y titulación superior en <span className="font-bold text-orange-400">Desarrollo de Aplicaciones Web (DAW).</span>. 
                    <p className="mx-auto mb-4 my-2 text-xl md:text-xl md:mx-0 md:mb-8">Combino una sólida visión estratégica con competencias técnicas avanzadas para desarrollar soluciones digitales eficientes, escalables y alineadas con los objetivos del negocio.</p>
                    </p>
                    <p className="mx-auto my-2 text-lg md:text-xl md:mx-0 italic text-gray-300"> Mi enfoque: crear soluciones que optimicen procesos y aporten valor real al proyecto.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/es/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/es/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                          <a href="https://elpatronsingleton.diegooru.com/"
                            className="relative px-4 py-2 my-5 border-2 text-md w-fit rounded-xl text-white hover:scale-105 transition-all hover:shadow-xl hover:shadow-white/50" >
                            Visita mi Blog
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full animate-bounce">Nuevo</span>
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;