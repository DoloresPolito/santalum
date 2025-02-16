import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ContactSection from "@/structure/ContactSection1";
import NewFooter from "@/structure/Footer";
import ColorChangeOnScrollGsap from "@/components/ChangeColor";

export const Contacto = ({}) => {
  return (
    <>

      <div className={styles.section}>
      <ColorChangeOnScrollGsap/>

      </div>

    </>
  );
};

export default Contacto;
