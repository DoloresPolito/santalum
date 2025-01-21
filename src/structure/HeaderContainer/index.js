"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import BookButton from "@/components/BookButton";

export default function HeaderContainer() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.bar}>
        <h2>Santalum</h2>
        <BookButton />
   
      </div>
      {/* <motion.div initial="initial" className={styles.background}></motion.div> */}

    </div>
       </>
  );
}
