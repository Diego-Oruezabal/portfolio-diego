"use client"

import { div, p } from "motion/react-client";
import TransitionPage from '@/components/transition-page';
import ContainerPage from "@/components/container-page";
import { dataContact } from "@/data";
import  Link from "next/link";
import ContactFormEn from "@/components/contact-formEn";

const Contact = () => {
    return (
        
        <ContainerPage>
        <TransitionPage />
        
        <div className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-200 dark:text-white">

            <span className="text-orange-500"> Get in touch </span>
            with me 👋
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
           <div>
                {dataContact.map((data) =>(
                    <div key={data.id}
                       className="flex flex-col items-center text-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl shadow-md p-6 mb-5 transition hover:shadow-lg">
                       <div className="text-3xl mb-3 text-orange-500">{data.icon}</div>
                        <p className="font-semibold text-lg">{data.title}</p>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">{data.subtitle}</p>
                        <Link href={data.link} target="_blank" className="text-blue-500 hover:underline">
                            Send message
                        </Link>
                    </div>
                ))}
            </div>
            <div className="col-span-2">
                <ContactFormEn />

            </div>



        </div>
        </ContainerPage>
        
      );
}
 
export default Contact;