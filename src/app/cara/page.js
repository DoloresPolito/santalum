import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
export const Cara = ({}) => {
  return (
    <>
      <AnimatedHomeHeader />
      <div className={styles.section}>
        <div className={styles.container}></div>
      </div>
    </>
  );
};

export default Cara;
