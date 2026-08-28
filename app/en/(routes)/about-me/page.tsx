"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Experience in leadership, operations and{' '}
                    <span className="font-bold text-secondary">
                        digital transformation
                    </span>
                </h1>
                <p className="max-w-3xl mt-4 text-sm leading-relaxed text-center text-gray-300 md:text-left md:text-base">
                    I connect business needs with technological solutions through team leadership, quality management, automation, web development and SEO.
                </p>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;
