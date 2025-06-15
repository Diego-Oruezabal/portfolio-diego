"use client";

import { CoverParticles } from "@/components/cover-particles";
import IntroductionEn from "@/components/introductionEn";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <IntroductionEn />
      </div>
    </main>
  );
}
