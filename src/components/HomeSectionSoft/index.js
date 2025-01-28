"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import image2 from "../../../public/images/nuevas/5.jpg";
import image3 from "../../../public/images/nuevas/4.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeSectionSoft = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animación para las imágenes que entran desde los lados con rotación
    const animateImages = (imageRef, direction) => {
      gsap.fromTo(
        imageRef.current,
        {
          x: direction === "left" ? "-100%" : "100%", // Fuera del contenedor
          rotate: direction === "left" ? -30 : 30, // Rotación inicial
          opacity: 0,
        },
        {
          x: "0%",
          rotate: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%", // Cuando la imagen entra al viewport
            end: "top 40%", // Punto final de la animación
            scrub: true, // Suaviza la animación durante el scroll
          },
        }
      );
    };

    animateImages(leftImageRef, "left");
    animateImages(rightImageRef, "right");

    // Animación para el texto que crece
    gsap.fromTo(
      textRef.current,
      {
        scale: 0.8, // Tamaño inicial reducido
        opacity: 0,
      },
      {
        scale: 1, // Tamaño final
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* Columna izquierda */}
        <div className={styles.column1}>
          <div
            className={styles.imagecontainer}
            ref={leftImageRef} // Referencia a la imagen izquierda
          >
            <Image src={image2} alt="Imagen 2" priority />
          </div>
        </div>

        {/* Columna central */}
        <div className={styles.column2}>
          <h3>( BELLEZA A TU MEDIDA )</h3>
          <div ref={textRef}>
            <h1>
              Adiós a lo genérico.
              <br /> Bienvenidos resultados únicos.
            </h1>
          </div>
          <p>
            Cada persona es única, y en Santalum, diseñamos planes estéticos
            personalizados pensando exclusivamente en ti.
          </p>
        </div>

        {/* Columna derecha */}
        <div className={styles.column3}>
          <div
            className={styles.imagecontainer}
            ref={rightImageRef} // Referencia a la imagen derecha
          >
            <Image src={image3} alt="Imagen 3" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSoft;