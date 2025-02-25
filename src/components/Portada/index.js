"use client"
import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import styles from "./styles.module.scss"; // Asegúrate de tener los estilos necesarios aquí
import cara from "../../jsons/faciales.json";
import cuerpo from "../../jsons/corporales.json";
import capilar from "../../jsons/capilares.json";
import Image from "next/image";

export default function Portada({category}) {
  const [imagenes, setImagenes] = useState([]);
  const lenisRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false); 


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
useEffect(() => {

  }, [relatedTreatments]);


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
          <div className={styles.fotoPortada} key={index}>
            <Image src={`/${treatment.img}`} alt={`Imagen ${index + 1}`} loading="lazy" width={500} height={500}/>
          </div>
        ))}
      </div>
    </div>
  );
}