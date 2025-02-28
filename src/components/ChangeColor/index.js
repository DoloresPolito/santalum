"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ContactSection1 from "@/structure/ContactSection1";
import ContactSection2 from "@/structure/ContactSection2";
import Footer from "@/structure/Footer";
import styles from "./styles.module.scss"
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
      <AnimatedHomeHeader />
      <section
        // className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32"
        className={styles.section}
        data-bgcolor="#f4f4d6"
        data-textcolor="#d0b6c0"
      >
        <div 
        // className="w-full flex items-center justify-around"
        className={styles.container}
        >
          <ContactSection2 />
        </div>
      </section>

      <section
        // className="min-h-screen w-screen max-w-full relative flex items-center justify-center px-32"
        className={styles.section}
        data-bgcolor="#f8fb9c"
        data-textcolor="#ffffff"
      >
        <div 
        // className="w-creen flex items-center justify-around w-full"
        className={styles.container}
        >
          <ContactSection1 />
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
