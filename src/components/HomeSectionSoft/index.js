"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import image2 from "../../../public/images/cara/labios.png";
import image3 from "../../../public/images/cuerpo/extra.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeSectionSoft = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
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
             <p>
            Cada persona es única, y en Santalum, diseñamos planes estéticos
            personalizados pensando exclusivamente en ti.
          </p>
          </div>
         
        </div>

      </div>
    </div>
  );
};

export default HomeSectionSoft;