import Image from "next/image";
import Link from "next/link";

import Tilt from 'react-parallax-tilt';

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        tech: string,
        urlGithub: string,
        urlDemo: string,
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, tech, urlDemo, urlGithub } = data

    return (
        <Tilt>
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
            />

           
            <p className="mb-4 mt-4 text-sm text-yellow-200 italic">{tech}</p>

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
        </Tilt>
    );
}

export default PortfolioBox
