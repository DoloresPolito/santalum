"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./styles.module.scss";
import Nav from "./Nav";
import BookButton from "../BookButton";

import Link from "next/link";

const menu = {
  open: {
    width: "480px",
    height: "100vh",
    top: "-10px",
    right: "-35px",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",

    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};



export default function Index() {
  const [isActive, setIsActive] = useState(false);



  return (
    <div className={styles.header}>
      <div className={styles.buttoncontainer}>
        <Link href="https://wa.me/34611833062"    target="_blank"
              rel="noopener noreferrer">


        <BookButton text="contactanos" color="#39442b" hoverB="#f8fb9c" hoverC="#39442b"/>
        </Link>
      </div>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />

   


    </div>
  );
}
