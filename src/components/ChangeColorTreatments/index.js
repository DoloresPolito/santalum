"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Footer from "@/structure/Footer";
import MovingTreatments from "@/components/MovingTreatments";
import Link from "next/link";
import HoverTreatments from "@/components/HoverTreatments";

gsap.registerPlugin(ScrollTrigger);

function ColorChangeTreatmentsOnScrollGsap({ content, category }) {
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
        start: "top 50%",
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
    <div className="main h-screen w-screen flex flex-col overflow-auto">


      <section
        className="min-h-screen w-screen relative flex items-center justify-center px-32"
        data-bgcolor="#3b3825"
        data-textcolor="#c2c1b3"
      >
        <div className="w-full flex flex-col items-center justify-around">
   
          <h2>{content.titulo}</h2>
          <h2>{content.texto}</h2>

      
        </div>
      </section>

      <section
        className="
        min-h-screen w-screen 
        relative "
        data-bgcolor="#032F35"
        data-textcolor="#b3c2ba"
      >
        <div className="w-full flex items-center justify-around">
          <HoverTreatments content={content} />
        </div>
      </section>

      <section
        className="min-h-screen w-screen relative flex items-center justify-center px-32"
        data-bgcolor="#582e1a"
        data-textcolor="#ffffff"
      >
        <div className="w-full  text-[9vw] leading-[1.1] tracking-tighter ">
          <span className={``}>End Of Scroll</span>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ColorChangeTreatmentsOnScrollGsap;
