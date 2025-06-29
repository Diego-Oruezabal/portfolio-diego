"use client"

import Image from "next/image";
import Link from "next/link";

import { dataPortfolioEn } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";


import { use } from "react";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">My latest <span className="font-bold text-secondary">projects</span></h1>

               
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolioEn.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                
                </div>
                

            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;