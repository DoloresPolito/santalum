"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BookButton from "@/components/BookButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const HomeSectionSoft = () => {
  const textRef = useRef(null);

  useEffect(() => {
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
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column2}>
          <h3>( BELLEZA A TU MEDIDA )</h3>
          <div ref={textRef}>
            {/* <h1>
              Adiós a lo genérico.
              <br /> Bienvenidos resultados únicos.
            </h1> */}
            <p className={styles.pcontainer}>
              Cada persona es única, y en Santalum, diseñamos planes estéticos
              personalizados pensando exclusivamente en ti.
            </p>
          </div>
          {/* <Link href="/nosotros">
            <BookButton
              text="sobre nosotros"
              color="#39442b"
              hoverB="#fdfdf1"
              hoverC="#39442b"
              isHovered={isHovered}
            />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSoft;
