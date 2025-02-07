import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ContactSection from "@/structure/ContactSection";
import HomeSectionSoft from "@/components/HomeSectionSoft";

export const Contacto = ({}) => {
  return (
    <>
      <AnimatedHomeHeader />
      <div className={styles.section}>
      <ContactSection/>
      <HomeSectionSoft/>
      </div>
    </>
  );
};

export default Contacto;
