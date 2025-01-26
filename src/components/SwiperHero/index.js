"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

export default function SwiperHero() {
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
      src: "capilarhero.mp4",
      background: "#242424",
      link: "/capilar",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 750);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.carouselcontent}>
            <Swiper
              loop={true}
              speed={1000}
              // parallax={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Parallax, Pagination, Navigation, Autoplay]}
              className={styles.mySwiper}
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Slide slide={slide} />
                  </SwiperSlide>
                );
              })}
              {/* {isMobile ? (
                <></>
              ) : ( */}
              <>
                {/* <div
                    className="swiper-button-next"
                    style={{ color: "#F5F4F4" }}
                  ></div>
                  <div
                    className="swiper-button-prev"
                    style={{ color: "#F5F4F4" }}
                  ></div> */}
              </>
              {/* )} */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

const Slide = ({ slide }) => {
  return (
    <>
      <div
        className={styles.slide}
        // style={{ backgroundColor: slide.background }}
      >
        <div className={styles.textcontainer}>
          <div className={styles.inside}>
            <div className={styles.title} data-swiper-parallax="-300">
              {slide.title}
            </div>{" "}
            <div className={styles.text} data-swiper-parallax="-100">
              <p>{slide.text}</p>
            </div>
            <Link href={slide.link}>
            <button>VER TRATAMIENTOS</button>
            </Link>
           
          </div>
        </div>
        <div className={styles.column}>
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
        </div>
        {/* <motion.div
          className={styles.imagecontainer}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Image
            src={`/images/treatments/${slide.src}`}
            alt="image"
            width={600}
            height={700}
          />
        </motion.div> */}
      </div>
    </>
  );
};
