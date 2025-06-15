"use client"

import AvatarServices from "@/components/avatar-services";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeTrainingLine from "@/components/time-training-line";
import TimeCertificationLine from "@/components/time.certification.line";
import TimeLanguagesLine from "@/components/time-languages-line";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
import {getDataTrainingPage,
  getCertifications,
  getLanguages,
  getDataCounter, } from "@/data";




const TrainingPage = () => {

  const trainingData = getDataTrainingPage("en");
  const certificationsData = getCertifications("en");
  const languagesData = getLanguages("en");
  const countersData = getDataCounter("en");
    return (
        <>
        <CoverParticles />
            <TransitionPage />
            <ContainerPage>
            
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    My{' '}
                    <span className="font-bold text-secondary">
                        training
                    </span>
                </h1>         

                <TimeTrainingLine />

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    My{' '}
                    <span className="font-bold text-secondary">
                        certifications
                    </span>
                </h1> 

                <TimeCertificationLine />

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    My{' '}
                    <span className="font-bold text-secondary">
                        languajes
                    </span>
                </h1> 

                <TimeLanguagesLine />

            </ContainerPage>
        </>
    );
}

export default TrainingPage;