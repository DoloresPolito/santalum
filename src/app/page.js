"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/structure/Intro";
// import Description from "@/structure/Description";
import Section from "@/structure/Section";
import Loop from "@/components/Loop";
import FaqsSection from "@/components/FaqsSection";
// import Treatments from "@/components/Treatments";
// import SwiperHero from "@/components/SwiperHero";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
// import styles from "./styles.module.scss";
// import Carrousel from "@/components/Carrousel";

import MovingTreatments from "@/components/MovingTreatments";
import HomeSectionSoft from "@/components/HomeSectionSoft";
import AnimationPrueba from "@/components/AnimationsPrueba";
import CanvasVideo from "@/components/CanvasVideo";

import ColorChangeOnScrollGsap from "@/components/ChangeColor";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <main>
        <AnimatedHomeHeader />
        <Intro />
        <CanvasVideo/>
        <Loop />
        <HomeSectionSoft />
        <MovingTreatments />
        <Section />
      </main>

      <FaqsSection /> */}
      <ColorChangeOnScrollGsap/>
    </>
  );
}
