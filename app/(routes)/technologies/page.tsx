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
        size={50}
        revealSize={300}
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-200 dark:text-white">
          
           <span className="text-orange-500"> Tecnologías </span>
           que utilizo en mis proyectos.
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
            
        </>
    );
}

export default TechnologiesPage;