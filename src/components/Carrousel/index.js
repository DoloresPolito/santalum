import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import {motion} from "framer-motion"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar automáticamente cada 5 segundos
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      }, 5000);
  
      return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte el componente
    }, []);

    const slides = [
        {
          title: "TRATAMIENTOS DE CARA",
          text: "Cuidados especializados que revitalizan la piel, suavizan líneas de expresión y realzan los rasgos faciales, brindando un aspecto fresco y natural.",
          src: "cara1.png",
          background: "#62685e",
          link: "/cirugia-plastica",
        },
        {
          title: "TRATAMIENTOS DE CUERPO",
          text: "Tratamientos corporales diseñados para esculpir, tonificar y mejorar la apariencia física, utilizando técnicas avanzadas que garantizan resultados naturales y efectivos.",
          src: "cuerpo.png",
          background: "#9d8b74",
          link: "/cirugia-reparadora",
        },
        {
          title: "TRATAMIENTOS CAPILARES",
          text: "Tratamientos capilares personalizados para fortalecer, revitalizar y estimular el crecimiento del cabello, utilizando tecnologías avanzadas y soluciones innovadoras que recuperan su salud, brillo y densidad de forma natural y efectiva.",
          src: "cara2.png",
          background: "#242424",
          link: "/no-quirurgicos",
        },
      ];

  return (
    <div className={styles.carousel}>
    <div className={styles.carouselContainer}>
    <motion.div
          key={currentIndex}
          className={styles.carouselContent}
          initial={{ opacity: 0, x:500}} // Inicia con opacidad 0 y un movimiento suave hacia la izquierda
          animate={{
            opacity: 1,         // Se vuelve completamente visible
            x: 0,               // Se mueve a la posición original (sin desplazamiento)
          }}
          exit={{ opacity: 0}}   // Desvanece y se mueve hacia la derecha cuando sale
          transition={{
            duration: 1.5,         // Duración de la animación
            ease: "easeInOut",   // Efecto de suavizado
          }}
        >
    
        <div className={styles.textcontainer}>
          <div className={styles.inside}>
            <div className={styles.title} data-swiper-parallax="-300">
            {slides[currentIndex].title}
            </div>{" "}
            <div className={styles.text} data-swiper-parallax="-100">
              <p>{slides[currentIndex].text}</p>
            </div>
          </div>
        </div>
        <div className={styles.carouselImage}>
          <Image
            src={`/images/treatments/${slides[currentIndex].src}`}
            alt={slides[currentIndex].title}
            width={450}
            height={400}
          />
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default Carousel;