"use client";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import Project from "@/components/Project";
// import Modal from "@/components/Modal";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import AnimatedDiv from "../AnimatedDiv";
import Background from "../../../public/images/work/fondomiddle2.png";
import Image from "next/image";
export default function Home({ content, category }) {
  // const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <AnimatedHomeHeader />
      <div className={styles.imagecontainer}>
        <Image src={Background} className={styles.imagen}/>
        <div className={styles.titlecontainer}>

 
        <AnimatedDiv>
          <h2 className={styles.title}>{content.titulo}</h2>
        </AnimatedDiv>
        <AnimatedDiv delay={0.1}>
          <h2 className={styles.text}>{content.texto}</h2>
        </AnimatedDiv>
        </div>
      </div>
      <div className={styles.body}>

        {content.tratamientos.map((project, index) => (
          <Project
            index={index}
            project={project}
            category={category}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
