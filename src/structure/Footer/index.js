"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// import insta from "../../../public/icons/insta.png";
// import plane from "../../../public/icons/plane.png";

// import blue from "../../../public/icons/blue.png";
// import white from "../../../public/icons/white.png";

import BookButton from "@/components/BookButton";
export default function NewFooter() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottom}>
            <h1>Santalum</h1>
          </div>
          <div className={styles.top}>
            <div className={styles.cont1}>
              <h4>Ubicación</h4>
              <Link
                href="https://www.google.com.ar/maps"
                target="_blank"
              >
                <p> Cami de Can Pastilla 68 Bajo C</p>
                <p>Palma de Mallorca</p>
              </Link>
            </div>
            <div className={styles.cont2}>
              <div className={styles.line1}>
                {/* <p>Nosotros</p>
                <p>Servicios</p> */}
                <Link href="https://www.coenergy.ar/" target="_blank">
                  <p>Tratamientos</p>
                </Link>
                <Link href="/nosotros">
                  <p>Nosotros</p>
                </Link>
                {/* <p>Contacto</p> */}
              </div>

              <div className={styles.line2}>
                <p>Santalum ® 2024. Todos los derechos reservados.</p>
              </div>
            </div>
            <div className={styles.cont3}>
              <Link
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
              >
           

                  <BookButton/>
               
              </Link>
              <div className={styles.socialmediacontainer}>
                <Link
                  href="https://www.instagram.com/coenergysa/"
                  target="_blank"
                >
                  <div className={styles.circle}>
                    {/* <Image src={insta} alt="instagram" /> */}
                  </div>
                </Link>
                <Link href="mailto:info@coenergysa.com">
                  <div className={styles.circle}>
                    {/* <Image src={plane} alt="e-mail" /> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
