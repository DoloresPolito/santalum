"use client";
import styles from "./style.module.css";
// import { useState } from "react";
import Project from "@/components/Project";
// import Modal from "@/components/Modal";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import AnimatedDiv from "../AnimatedDiv";

export default function Home({ content }) {
  // const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <AnimatedHomeHeader />
      <div className={styles.body}>
        <AnimatedDiv>

     
        <h2 className={styles.title}>{content.titulo}</h2>
        </AnimatedDiv>
        <AnimatedDiv delay={0.1}>


        <h2 className={styles.text}>{content.texto}</h2>
        </AnimatedDiv>
        {content.tratamientos.map((project, index) => {
          return (
            <Project
              index={index}
              project={project}
              // setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      {/* <Modal modal={modal} content={content} /> */}
    </main>
  );
}
