import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ContactSection from "@/structure/ContactSection";
export const Contacto = ({}) => {
  return (
    <>
      <AnimatedHomeHeader />
      <div className={styles.section}>
      <ContactSection/>
      </div>
    </>
  );
};

export default Contacto;
