"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss";
import Intro from "@/structure/Intro";
// import { AnimatePresence } from "framer-motion";
// import Preloader from "../components/Preloader";
// import SwiperHeroNew from "@/components/SwiperHeroNew";
import HomeSectionSoft from "@/components/HomeSectionSoft";
import Work3 from "@/structure/Work3";
import Section from "@/structure/Section";
import FaqsSection from "@/components/FaqsSection";
import ReviewsSection from "@/structure/ReviewSection";
import Footer from "@/structure/Footer";
import Loop from "@/components/Loop";
import Portada from "@/components/Portada";




export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <div className={styles.main}>
      {/* <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : ( */}
          <>
            <Intro />
            <Loop/>
            <HomeSectionSoft/>
            <Work3 />
            <Section />
         
            {/* <SwiperHeroNew /> */}
<Portada/>
       
            <FaqsSection />
            <ReviewsSection />
          </>
        {/* )}
      </AnimatePresence> */}
      <Footer />
    </div>
  );
}


