"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Link from "next/link";
import BookButton from "../BookButton";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
export default function SwiperHeroNew() {
  const slides = [
    {
      title: "TRATAMIENTOS DE CARA",
      text: "Cuidados especializados que revitalizan la piel, suavizan líneas de expresión y realzan los rasgos faciales, brindando un aspecto fresco y natural.",
      src: "carahero.mp4",
      background: "#62685e",
      link: "/cara",
    },
    {
      title: "TRATAMIENTOS DE CUERPO",
      text: "Tratamientos corporales diseñados para esculpir, tonificar y mejorar la apariencia física, utilizando técnicas avanzadas que garantizan resultados naturales y efectivos.",
      src: "video1.mp4",
      background: "#9d8b74",
      link: "/cuerpo",
    },
    {
      title: "TRATAMIENTOS CAPILARES",
      text: "Tratamientos capilares personalizados para fortalecer, revitalizar y estimular el crecimiento del cabello, utilizando tecnologías avanzadas y soluciones innovadoras que recuperan su salud, brillo y densidad de forma natural y efectiva.",
      src: "capilar2.mp4",
      background: "#242424",
      link: "/capilar",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  return (
    
    <div className={styles.container}>

      <div className={styles.carouselcontainer}>
 
        <div className={styles.carouselcontent}>

          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className={styles.mySwiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const Slide = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.videocontainer}>
        <video
          src={`/images/nuevas/${slide.src}`}
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.textcontent}>
          <div className={styles.title} data-swiper-parallax="-300">
            {slide.title}
          </div>
          <div className={styles.text} data-swiper-parallax="-100">
            <p>{slide.text}</p>
          </div>
          <Link href={slide.link}>
            <BookButton text="Ver tratamientos" />
          </Link>
        </div>
      </div>
    </div>
  );
};