"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import Footer from "@/structure/Footer"
import MovingTreatments from "@/components/MovingTreatments";

gsap.registerPlugin(ScrollTrigger);

function ColorChangeTreatmentsOnScrollGsap({content}) {
  useEffect(() => {

    console.log("content", content)
    const scrollBar = Scrollbar.init(document.querySelector('.main'), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });
    ScrollTrigger.defaults({
      scroller: '.main',
    });
    ScrollTrigger.scrollerProxy('.main', {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: '.main',
        start: 'top 50%',
        onEnter: () =>
          gsap.to('.main', {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
          }),
        onLeaveBack: () =>
          gsap.to('.main', {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => {};
  }, []);

  return (
  
      <div className="main h-screen w-screen flex flex-col overflow-auto">

      <section
        className="min-h-screen w-screen relative flex items-center justify-center px-32"
        data-bgcolor="#39442b"
        data-textcolor="#ffffff"
      >
        <div className="w-screen  text-[9vw] leading-[1.1] tracking-tighter ">
        <MovingTreatments/>
        </div>
      </section>

      <section
        className="min-h-screen w-screen relative flex items-center justify-center px-32"
        data-bgcolor="#fdfdf1"
        data-textcolor="#d0b6c0"
      >
        <div className="w-full flex items-center justify-around">

       
        </div>
      </section>

      <section
        className="min-h-screen w-screen relative flex items-center justify-center px-32"
        data-bgcolor="#3b3825"
        data-textcolor="#c2c1b3"
      >
        <div className="w-full flex items-center justify-around">
          <div>
            <img
              src="https://images.pexels.com/photos/4467879/pexels-photo-4467879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div className="w-96 text-5xl">
            Look deep into{' '}
            <span className={`text-green`}>Yourself</span> ,
            and then you will understand everything better.
          </div>
        </div>
      </section>

      <section
        className="min-h-screen w-screen relative "
        data-bgcolor="#032F35"
        data-textcolor="#b3c2ba"
      >
        <div className="w-full flex items-center justify-around">
          <div className={`w-96 text-5xl`}>
            The best thing one can do when it's raining is{' '}
            <span className={`text-green`}>
              to let it rain.
            </span>{' '}
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="rounded-3xl"
            />
          </div>
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
      <Footer/>
    </div>
  );
}

export default ColorChangeTreatmentsOnScrollGsap;