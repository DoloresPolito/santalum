import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import diamante from "../../../public/images/icons/diamante.png"

const Loop = ({ reverse }) => {
  const logos = [{text:"TRATAMIENTOS PERSONALIZADOS"},{text:"ESTETICA CERTIFICADA"},{text:"PROFESIONALISMO MÉDICO"},
   
  ];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={`loop-${index}`}>
            <p>{logo.text}</p>
            <Image
              src={diamante}
              alt="diamante"
              width={150}
              height={120}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loop;;