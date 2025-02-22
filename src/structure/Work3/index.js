import React, { useState } from "react";
import styles from "./styles.module.scss";
import AnimatedDiv from "../../components/AnimatedDiv";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BookButton from "@/components/BookButton";

export default function Work3() {
  const items = [
    {
      id: 1,
      title: "Tratamientos de cara",
      imageUrl: "/images/work/workcara.jpg",
      delay: 0.3,
      link: "/cara",
    },
    {
      id: 2,
      title: "Tratamientos de cuerpo",
      imageUrl: "/images/work/workcuerpo.jpg",
      delay: 0.5,
      link: "/cuerpo",
    },
    {
      id: 3,
      title: "Tratamientos capilares",
      imageUrl: "/images/work/workcapilar.png",
      delay: 0.7,
      link: "/capilar",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {items.map((item) => {
         

          return (
            <Link key={item.id} href={item.link} className={styles.fullLink}>
              <motion.div
                className={styles.item}
                initial={{ backgroundSize: "100%", opacity: 1 }}
                whileHover={{
                  backgroundSize: "105%",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                animate={{ backgroundSize: "100%", opacity: 1 }}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatedDiv delay={item.delay}>
                  <Image
                    src={item.imageUrl}
                    alt="work"
                    height={600}
                    width={500}
                    priority
                  />
                </AnimatedDiv>

                <div className={styles.textcontainer}>
                  <AnimatedDiv delay={item.delay}>
                    <h2>{item.title}</h2>
                  </AnimatedDiv>

                  <BookButton
                    text="ver más"
                    color="white"
                    hoverB="#f8fb9c"
                    hoverC="#39442b"
                    isHovered={isHovered} // Pasamos el estado de hover al botón
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
