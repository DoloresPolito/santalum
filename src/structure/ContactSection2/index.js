"use client";
import React from "react";
import styles from "./styles.module.scss";

import Footer from "@/structure/Footer";
import BookButton from "@/components/BookButton";
import Contact from "@/components/ContactForm";

import AnimatedDiv from "@/components/AnimatedDiv";

const ContactSection1 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.column2}>
            <AnimatedDiv>
              <h3> Tienes preguntas? </h3>
              <p>
                Nuestro equipo esta listo para ayudarte si tenes curiosidad por
                nuestros servicios o simplemente queres consultar por los
                benefcios que traen.
              </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2}>
              <p>Escribinos y te responderemos lo antes posible</p>
            </AnimatedDiv>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection1;
