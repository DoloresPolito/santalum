import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const MovingTreatments = ({ relacionados }) => {
  return (
    <div
      className={`${styles.loopSection} 

    `}
    >
      <div className={styles.textcontainer}>
        <h2>TRATAMIENTOS RELACIONADOS</h2>
      </div>
      <div className={styles.marquee}>
        {relacionados.map((item, index) => (
          <Link href={`${item.id}`}       key={`loop-${index}`}>
            <div
                key={`loop-${index}`}
              className={styles.item}
          
              style={{ backgroundImage: `url(/${item.img})` }}
            >
              <button className={styles.actionButton}>Ver más</button>
              <div className={styles.title}>{item.titulo}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovingTreatments;
