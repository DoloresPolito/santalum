import React from "react";
import styles from "./styles.module.scss";

const MovingTreatments = ({ reverse }) => {
  const items = [
    { text: "Tratamiento 1", picture: "/images/nuevas/1.jpg", title: "Título 1" },
    { text: "Tratamiento 2", picture: "/images/nuevas/2.jpg", title: "Título 2" },
    { text: "Tratamiento 3", picture: "/images/nuevas/3.jpg", title: "Título 3" },
    { text: "Tratamiento 4", picture: "/images/nuevas/4.jpg", title: "Título 4" },
    { text: "Tratamiento 5", picture: "/images/nuevas/5.jpg", title: "Título 5" },
    { text: "Tratamiento 6", picture: "/images/nuevas/6.jpg", title: "Título 6" },
    { text: "Tratamiento 7", picture: "/images/nuevas/7.jpg", title: "Título 7" },
    { text: "Tratamiento 8", picture: "/images/nuevas/8.jpg", title: "Título 8" },
    { text: "Tratamiento 9", picture: "/images/nuevas/9.jpg", title: "Título 9" },
  ];

  // Duplicamos los elementos para lograr el efecto continuo
  const repeatedItems = [...items, ...items];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {repeatedItems.map((item, index) => (
          <div className={styles.item} key={`loop-${index}`} style={{ backgroundImage: `url(${item.picture})` }}>
            <button className={styles.actionButton}>Ver más</button>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingTreatments;