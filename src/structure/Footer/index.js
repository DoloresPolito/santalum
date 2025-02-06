"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import insta from "../../../public/icons/instagram.png";
import mail from "../../../public/icons/mail.png";

import logo from "../../../public/logo/fondoverde.png"


import BookButton from "@/components/BookButton";
export default function NewFooter() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottom}>
            <div className={styles.logocontainer}>
              <Image src={logo} alt="logo"/>
              <h1>Santalum</h1>
            </div>

          </div>
          <div className={styles.top}>
            <div className={styles.cont1}>
              <h4>Ubicación</h4>
              <Link href="https://www.google.com.ar/maps" target="_blank">
                <p> Cami de Can Pastilla 68 Bajo C</p>
                <p>Palma de Mallorca</p>
              </Link>
            </div>
            <div className={styles.cont2}>
              <div className={styles.line1}>
        
                <Link href="/cara" >
                  <p>Cara</p>
                </Link>
                <Link href="/cuerpo">
                  <p>Cuerpo</p>
                </Link>
                <Link href="/capilar" >
                  <p>Capilar</p>
                </Link>
       
              </div>

        
            </div>
            <div className={styles.cont3}>
              <Link
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
              >


                <BookButton text="contactanos" color="#f0ebe3" hoverB="#f8fb9c" hoverC="#39442b"/>
              </Link>
              <div className={styles.socialmediacontainer}>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <div className={styles.circle}>
                    <Image src={insta} alt="instagram" />
                  </div>
                </Link>
                <Link href="mailto:info@coenergysa.com">
                  <div className={styles.circle}>
                    <Image src={mail} alt="e-mail" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.top2}>
            <div className={styles.left}>
              <p>® Santalum 2024 </p>
            </div>
            <div className={styles.right}>
              <p>Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
