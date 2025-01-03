"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";
import Image from "next/image";
// import Button from "../../components/Button";
// import AnimatedDiv from "../../components/AnimatedDiv";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SwiperHero() {
  const slides = [
    {
      title: "TRATAMIENTOS DE CARA",
      text: "Técnicas avanzadas que combinan arte y ciencia para realzar la belleza natural, mejorar la apariencia y corregir imperfecciones, logrando resultados estéticos armoniosos y personalizados.",
      src: "cara1.png",
      background: "#62685e",
      link: "/cirugia-plastica",
    },
    {
      title: "TRATAMIENTOS DE CUERPO",
      text: "Procedimientos especializados que restauran la función y la apariencia del cuerpo tras lesiones, cirugías o malformaciones congénitas, devolviendo confianza y mejorando la calidad de vida.",
      src: "cuerpo.png",
      background: "#9d8b74",
      link: "/cirugia-reparadora",
    },
    {
      title: "TRATAMIENTOS CAPILARES",
      text: "Soluciones estéticas avanzadas que mejoran la apariencia sin necesidad de cirugía, utilizando técnicas mínimamente invasivas para rejuvenecer la piel, remodelar el cuerpo y realzar la belleza natural de forma sutil y efectiva.",
      src: "cara2.png",
      background: "#242424",
      link: "/no-quirurgicos",
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.carouselcontent}>
            <Swiper
              loop={true}
              speed={1000}
              parallax={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // navigation={{
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // }}
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
              {isMobile ? (
                <></>
              ) : (
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
              )}
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
        style={{ backgroundColor: slide.background }}
      >
        <div className={styles.textcontainer}>
          <div className={styles.inside}>
            {/* <AnimatedDiv delay={0}> */}
              <div className={styles.title} data-swiper-parallax="-300">
                {slide.title}
              </div>{" "}
            {/* </AnimatedDiv>
            <AnimatedDiv delay={0.3}> */}
              <div className={styles.text} data-swiper-parallax="-100">
                <p>{slide.text}</p>
              </div>
            {/* </AnimatedDiv> */}
            {/* <AnimatedDiv delay={0.4}>
              <Link href={slide.link}>
                <Button color={slide.background} difbutton={slide.difbutton} />
              </Link>
            </AnimatedDiv> */}
          </div>
        </div>

        <motion.div
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
        </motion.div>
      </div>
    </>
  );
};