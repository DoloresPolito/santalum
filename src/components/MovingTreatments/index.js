import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const MovingTreatments = ({ relacionados }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={styles.loopSection}>
      <div className={styles.textcontainer}>
        <h2>TRATAMIENTOS RELACIONADOS</h2>
      </div>
      <div className={styles.marquee}>
        {relacionados.map((item, index) => (
          <Link href={`${item.id}`} key={`loop-${index}`}>
            <div
              key={`loop-${index}`}
              className={styles.item}
              style={{ backgroundImage: `url(/${item.img})` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.title}>{item.titulo}</div>
              <motion.button
                className={styles.button}
                animate={{
                  backgroundColor: hoveredIndex === index ? "#f8f89e" : "#39442b",
                  borderColor: hoveredIndex === index ? "#39442b" : "#f8f89e",
                  color: hoveredIndex === index ? "#39442b" : "#f8f89e",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  animate={{
                    rotate: hoveredIndex === index ? -45 : 0, // Rota 45° en hover
                    fill: hoveredIndex === index ? "#f8f89e" : "#f8f89e",
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
};

export default MovingTreatments;
