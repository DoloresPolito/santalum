"use client";
import React from "react";
import styles from "./styles.module.scss";
// import AnimatedDiv from "../../components/AnimatedDiv";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// import Button from "@/components/Button";


export default function Treatments() {
  const items = [
    {
      id: 1,
      title: "CUERPO",
      imageUrl: "/images/treatments/t1.png",
      delay: 0.3,
      link: "/cuerpo",
    },
    {
      id: 2,
      title: "CARA",
      imageUrl: "/images/treatments/t2.png",
      delay: 0.5,
      link: "/cara",
    },
    {
      id: 3,
      title: "CAPILAR",
      imageUrl: "/images/treatments/t3.png",
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