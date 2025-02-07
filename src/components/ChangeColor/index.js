"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Intro from "../../structure/Intro";
import HomeSectionSoft from "../HomeSectionSoft";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import SwiperHeroNew from "@/components/SwiperHeroNew";
// import Loop from "@/components/Loop";
import FaqsSection from "@/components/FaqsSection";
import ReviewsSection from "@/structure/ReviewSection";
import Work3 from "@/structure/Work3";
import Footer from "@/structure/Footer";
gsap.registerPlugin(ScrollTrigger);

function ColorChangeOnScrollGsap() {
  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector(".main"), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });
    ScrollTrigger.defaults({
      scroller: ".main",
    });
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sectionColor = document.querySelectorAll("[data-bgcolor]");
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? "" : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor =
        i === 0 ? "" : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: ".main",
        start: "top 100%",
        onEnter: () =>
          gsap.to(".main", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to(".main", {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: "auto",
          }),
      });
    });

    return () => {};
  }, []);

  return (
    <div className="main h-screen w-screen  max-w-full flex flex-col overflow-x-hidden z-50">
      <AnimatedHomeHeader/>
      <section
        className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32"
        data-bgcolor="#fdfdf1"
        data-textcolor="#d0b6c0"
      >
        <div className="w-full flex items-center justify-around">
          <SwiperHeroNew />
        </div>
      </section>

      <section
        className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32"
        data-bgcolor="#fdfdf1"
        data-textcolor="#d0b6c0"
      >
        <div className="w-full flex items-center justify-around">
          <HomeSectionSoft />
        </div>
      </section>

      <section
        className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32"
        data-bgcolor="#3b3825"
        data-textcolor="#c2c1b3"
      >
        <div className="w-creen flex items-center justify-around">
          <Work3 />
        </div>
      </section>

      <section
        className="min-h-screen w-screen relative "
        data-bgcolor="#f8fb9c"
        data-textcolor="#ffffff"
      >
        <div className="w-full flex items-center justify-around">
          <FaqsSection />
        </div>
      </section>

      <section
        className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32"
        data-bgcolor="#fdfdf1"
        data-textcolor="#d0b6c0"
      >
        <div className="w-screen  text-[9vw] leading-[1.1] tracking-tighter ">
          <ReviewsSection />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ColorChangeOnScrollGsap;

{
  /* <AnimatedHomeHeader /> */
}
{
  /* <section
        className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32 overflow-x-hidden"
        data-bgcolor="#39442b"
        data-textcolor="#ffffff"
      >
        <div className="w-screen  text-[9vw] leading-[1.1] tracking-tighter ">
          <Intro />
        </div>
      </section> */
}
