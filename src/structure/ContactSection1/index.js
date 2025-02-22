"use client";
import React from "react";
import styles from "./styles.module.scss";


import BookButton from "@/components/BookButton";


import AnimatedDiv from "@/components/AnimatedDiv";

const ContactSection1 = () => {
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
  <div className={styles.buttoncontainer}>
  <BookButton text="FAQS"/>
  </div>
             
            </div>
          </div>

         
        </div>

      </div>
    </>
  );
};

export default ContactSection1;
