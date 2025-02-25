"use client";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss"; // Asegúrate de tener los estilos necesarios aquí
import cara from "../../jsons/faciales.json";
import cuerpo from "../../jsons/corporales.json";
import capilar from "../../jsons/capilares.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Portada({ category }) {
  const [imagenes, setImagenes] = useState([]);
  const lenisRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Ahora `window` estará disponible
    };

    handleResize(); // Verifica el tamaño de la pantalla al cargar el componente
    window.addEventListener("resize", handleResize); // Escucha los cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
    };
  }, []);

  const [relatedTreatments, setRelatedTreatments] = useState([]);

  useEffect(() => {
    switch (category) {
      case "cara":
        setRelatedTreatments(cara[0].tratamientos);
        break;
      case "cuerpo":
        setRelatedTreatments(cuerpo[0].tratamientos);
        break;
      case "capilar":
        setRelatedTreatments(capilar[0].tratamientos);
        break;
      default:
        setRelatedTreatments([]);
    }
  }, [category]);

  // Nuevo useEffect para verificar el estado actualizado
  useEffect(() => {}, [relatedTreatments]);

  // Configuración de Lenis para scroll suave horizontal
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => t,
      smooth: true,
      direction: "horizontal", // Scroll horizontal
    });

    lenisRef.current = lenis;

    const onRaf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    };

    requestAnimationFrame(onRaf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollContent = () => {
      const velocidad = isSmallScreen ? 0.2 : 0.5;
      scrollContainer.scrollLeft += velocidad;
      requestAnimationFrame(scrollContent);
    };

    scrollContent();
  }, [isSmallScreen]);

  return (
    <div className={styles.homeCover} ref={scrollContainerRef}>
      <div id="content" className={styles.scrollContent} ref={scrollContentRef}>
        {relatedTreatments.map((treatment, index) => (
          <Link href={`${treatment.id}`} key={`loop-${index}`}>
            <div
              className={styles.fotoPortada}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={`/${treatment.img}`}
                alt={`Imagen ${index + 1}`}
                loading="lazy"
                width={500}
                height={500}
              />

              <div className={styles.title}>{treatment.titulo}</div>
              <motion.button
                className={styles.button}
                style={{
                  backgroundColor: "#f8f89e", // Siempre amarillo
                  borderColor: "#39442b",
                  color: "#39442b",
                }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  animate={{
                    rotate: hoveredIndex === index ? -45 : 0, // Solo rota en hover
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
                    fill="currentColor"
                  ></path>
                </motion.svg>
              </motion.button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
