import Image from "next/image";

const IntroductionEn = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image
                    src="/home-4.png"
                    priority
                    width="800"
                    height="800"
                    alt="Illustration of Diego Oruezabal working with technology"
                />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl font-bold leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        I connect <span className="text-secondary">business and technology</span> to solve real problems
                    </h1>

                    <p className="mx-auto mb-4 text-xl md:mx-0 md:mb-8">
                        A professional with more than ten years of experience in{" "}
                        <span className="font-bold text-orange-400">
                            management, operations and quality
                        </span>
                        , together with a background in{" "}
                        <span className="font-bold text-orange-400">
                            Web Application Development
                        </span>
                        .
                    </p>

                    <p className="mx-auto mb-4 text-xl md:mx-0 md:mb-8">
                        I build solutions focused on compliance, efficiency and process improvement while developing my specialisation in cloud and cybersecurity.
                    </p>

                    <p className="mx-auto my-2 text-lg italic text-gray-300 md:text-xl md:mx-0">
                        My approach: understand the problem, build a useful solution and demonstrate its impact.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a
                            href="/en/portfolio"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                        >
                            View projects
                        </a>
                        <a
                            href="/en/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            Get in touch
                        </a>
                        <a
                            href="https://elpatronsingleton.diegooru.com/"
                            className="relative px-4 py-2 my-5 text-white transition-all border-2 text-md w-fit rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-white/50"
                        >
                            Visit my Blog
                            <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full animate-bounce">
                                New
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionEn;
