"use client";
import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


export default function Treatments() {
  const items = [
    {
      id: 1,
      title: "CUERPO",
      imageUrl: "/images/destacados/01.png",
      delay: 0.3,
      link: "/cuerpo",
    },
    {
      id: 2,
      title: "CARA",
      imageUrl: "/images/destacados/02.png",
      delay: 0.5,
      link: "/cara",
    },
    {
      id: 3,
      title: "CAPILAR",
      imageUrl: "/images/destacados/03.png",
      delay: 0.7,
      link: "/capilar",
    },
    {
      id: 2,
      title: "CARA",
      imageUrl: "/images/destacados/04.png",
      delay: 0.5,
      link: "/cara",
    },
    // {
    //   id: 3,
    //   title: "CAPILAR",
    //   imageUrl: "/images/destacados/05.png",
    //   delay: 0.7,
    //   link: "/capilar",
    // },
  ];

  return (
    <>
      <div className={styles.section}>
        <h2>TRATAMIENTOS DESTACADOS</h2>
        <div className={styles.container}>
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={styles.item}
              initial={{ backgroundSize: "100%", opacity: 1 }}
              whileHover={{
                backgroundSize: "105%",
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              animate={{ backgroundSize: "100%", opacity: 1 }}
            >
              {/* <AnimatedDiv delay={item.delay}> */}
              <Image
                src={item.imageUrl}
                alt="work"
                height={600}
                width={500}
                priority
              />
              {/* </AnimatedDiv> */}

              <div className={styles.textcontainer}>
                {/* <AnimatedDiv delay={item.delay}> */}
                <h2>{item.title}</h2>
                {/* </AnimatedDiv> */}

                {/* <AnimatedDiv delay={item.delay}> */}
                <Link href={item.link}>
                  {/* <button>VER TRATAMIENTOS</button> */}
                  {/* <Button/> */}
                </Link>
                {/* </AnimatedDiv> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
