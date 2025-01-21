import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import image2 from "../../../public/images/nuevas/5.jpg";
import image3 from "../../../public/images/nuevas/4.jpg";
import AnimatedDiv from "../AnimatedDiv";

const HomeSectionSoft = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column1}>
          <div className={styles.videocontainer}>
            <video
              src="/images/nuevas/video1.mp4" // Ruta de tu video
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />
          </div>
        </div>
        <div className={styles.column2}>
          <h3>( BELLEZA A TU MEDIDA )</h3>
          <AnimatedDiv delay={0.2}>
            <h1>
              Adiós a lo genérico.
              <br /> Bienvenidos resultados únicos.
            </h1>
          </AnimatedDiv>

          <AnimatedDiv delay={0.5}>
            <p>
              Cada persona es única, y en Santalum, diseñamos planes estéticos
              personalizados pensando exclusivamente en ti.
            </p>
          </AnimatedDiv>
          <div className={styles.imagecontainer}>
            <Image src={image2} alt="Imagen 2" />
          </div>
        </div>
        <div className={styles.column3}>
          <div className={styles.imagecontainer}>
            <Image src={image3} alt="Imagen 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSoft;
