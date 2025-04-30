"use client"

import AvatarServices from "@/components/avatar-services";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeTrainingLine from "@/components/time-training-line";
import TimeCertificationLine from "@/components/time.certification.line";
import TimeLanguagesLine from "@/components/time-languages-line";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const TrainingPage = () => {
    return (
        <>
        <CoverParticles />
            <TransitionPage />
            <ContainerPage>
            
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Mi{' '}
                    <span className="font-bold text-secondary">
                        formación
                    </span>
                </h1>         

                <TimeTrainingLine />

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Mis{' '}
                    <span className="font-bold text-secondary">
                        certificaciones
                    </span>
                </h1> 

                <TimeCertificationLine />

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Mis{' '}
                    <span className="font-bold text-secondary">
                        Idiomas
                    </span>
                </h1> 

                <TimeLanguagesLine />

            </ContainerPage>
        </>
    );
}

export default TrainingPage;