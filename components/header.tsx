"use client"

import { dataContact, socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Diego
                            <span className="text-secondary">Oruezabal</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {dataContact.map((data) => (
                           <div key={data.id}
                           className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4 hover:bg-secondary">

                           <Link href={data.link} target="_blank">
                           {data.icon}
                           </Link>
                       </div>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;