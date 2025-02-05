"use client";
import React from "react";
import styles from "./styles.module.scss";

import Footer from "@/structure/Footer";
import BookButton from "@/components/BookButton";
import Contact from "@/components/ContactForm";

import AnimatedDiv from "@/components/AnimatedDiv";

const ContactSection = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.column1}>
            <AnimatedDiv>
            <h3>ESTAMOS AQUI PARA AYUDARTE</h3>
            </AnimatedDiv>
         

            <div className={styles.firstdiv}>
              <AnimatedDiv>

       
              <h2>HORARIO DE TRABAJO</h2>
              </AnimatedDiv>
              <AnimatedDiv delay={0.2}>
              <p>Lunes a Viernes</p>
              <p>8:30am a 5:00pm</p>
              </AnimatedDiv>
            </div>

            <div className={styles.seconddiv}>
              <AnimatedDiv>
              <h2>AYUDA</h2>
              </AnimatedDiv>
         
              <p>Preguntas Frecuentes</p>
              <p>Chequea las preguntas que nos hacen frecuentemente</p>
  
              <BookButton text="FAQS"/>
            </div>
          </div>

          <div className={styles.column2}>
          <AnimatedDiv>
            <p>
              Tienes preguntas? Nuestro equipo esta listo para ayudarte si tenes
              curiosidad por nuestros servicios o simplemente queres consultar
              por los benefcios que traen.
            </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2}>
            <p>Escribinos y te responderemos lo antes posible</p>
            </AnimatedDiv>
            <Contact/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactSection;
