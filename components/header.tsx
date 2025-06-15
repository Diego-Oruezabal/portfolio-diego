"use client"

import { dataContact, socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-4 sm:px-10 md:px-20" >
            <header>
                <div className="container flex flex-col items-center md:flex-row md:justify-between max-w-6xl mx-auto">

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
                         <LanguageSwitcher />
                    </div>
                    
                </div>
                
            </header>
        </MotionTransition>
    );
}

export default Header;