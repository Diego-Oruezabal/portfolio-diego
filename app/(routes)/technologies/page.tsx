"use client"

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { IconCloud } from '@/components/cloud';
import { IconCloudDemo } from '@/components/cloud-component';

const TechnologiesPage = () => {
    return (
        <>
            <TransitionPage />
           
      <MaskContainer
        size={30}
        revealSize={300}
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-200 dark:text-white">
          
           <span className="text-orange-500"> Tecnologías </span>
           que utilizo en mis proyectos...
          </p>
        }
        className="h-[25rem] rounded-md text-white dark:text-black"
      >
        ...Y que continúo{" "}
        <span className="text-blue-500">Estudiando</span> y
        <span className="text-blue-500">Aprendiendo</span>.
      </MaskContainer>

        <div className='mb-20'>
             <IconCloudDemo />
        </div>

        <p className="pb-20 mx-auto max-w-3xl mb-4 my-2 text-xl text-center md:text-xl md:mb-8 ">
          Utilizo tecnologías <span className="font-bold text-orange-400"> Front-End</span> como React, Next.js, Angular y JavaScript, y <span className="font-bold text-orange-400">Back-End</span> como Java, Spring Boot, PHP, Laravel y bases de datos SQL.
        </p>
            
        </>
    );
}

export default TechnologiesPage;