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
          
           <span className="text-orange-500"> Technologies  </span>
           I use in my projects...
          </p>
        }
        className="h-[25rem] rounded-md text-white dark:text-black"
      >
        ...And that I continue{" "}
        <span className="text-blue-500">Studying</span> and
        <span className="text-blue-500"> Learning</span>.
      </MaskContainer>

        <div className='mb-20'>
             <IconCloudDemo />
        </div>

        <p className="pb-20 mx-auto max-w-3xl mb-4 my-2 text-xl text-center md:text-xl md:mb-8 ">
           I use <span className="font-bold text-orange-400"> Front-End</span> technologies like React, Next.js, Angular, and JavaScript, and <span className="font-bold text-orange-400">Back-End</span> technologies like Java, Spring Boot, PHP, Laravel, and SQL databases.
        </p>
            
        </>
    );
}

export default TechnologiesPage;