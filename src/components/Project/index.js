"use client";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function Project({ index, project, setModal }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}
    >
      <Link
        href={`/cara/${project.id}`}
        aria-label={`Ir a ${project.titulo}`}
      />
      <h2>{project.titulo}</h2>
      <p>Subtitulo del tratamiento</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <img src={`/images/nuevas/${project.img}`}></img>
      </motion.div>
    </div>
  );
}
