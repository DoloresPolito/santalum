"use client";
import React from "react";
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
      imageUrl: "/images/nuevas/11.jpg",
      delay: 0.3,
      link: "/cara",
    },
    {
      id: 2,
      title: "Tratamientos de cuerpo",
      imageUrl: "/images/nuevas/8.jpg",
      delay: 0.5,
      link: "/cuerpo",
    },
    {
      id: 3,
      title: "Tratamientos capilares",
      imageUrl: "/images/nuevas/3.jpg",
      delay: 0.7,
      link: "/capilar",
    },
  ];

  return (
    <>
      <div className={styles.section}>
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

                <AnimatedDiv delay={item.delay}>
                  <Link href={item.link}>
                    <BookButton text="ver más" />
                  </Link>
                </AnimatedDiv>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
