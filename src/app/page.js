"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/structure/Intro";
import Description from "@/structure/Description";
import Section from "@/structure/Section";
import FaqsSection from "@/components/FaqsSection";
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
    <main>
      <Intro />
      <Description />
      <Section />
      <div className="h-screen"></div>
      <FaqsSection/>
    </main>
  );
}
