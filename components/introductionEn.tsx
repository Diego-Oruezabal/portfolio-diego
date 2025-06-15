import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const IntroductionEn = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        I turn <br />
                        <TypeAnimation
                            sequence={[
                                'code into impact',
                                1000,
                                'ideas into solutions',
                                1000,
                                'data into decisions',
                                1000,
                                'challenges into results',
                                1000,
                                'vision into reality',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-4 text-xl md:text-xl md:mx-0 md:mb-8">
                        Software developer with a background in <span className="font-bold text-orange-400">Business Administration</span>, an <span className="font-bold text-orange-400">MBA</span>, and an advanced degree in <span className="font-bold text-orange-400">Web Application Development</span>.
                    </p>

                    <p className="mx-auto mb-4 text-xl md:text-xl md:mx-0 md:mb-8">
                        I combine a strong strategic vision with advanced technical skills to build digital solutions that are efficient, scalable, and aligned with business goals.
                    </p>

                    <p className="mx-auto my-2 text-lg md:text-xl md:mx-0 italic text-gray-300">
                        My focus: creating solutions that streamline processes and deliver real value to the project.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/en/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            View projects
                        </a>
                        <a href="/en/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionEn;
