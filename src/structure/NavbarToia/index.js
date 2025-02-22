"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Importamos usePathname
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
import logo1 from "../../../public/logo/fondoblanco.png";
import logo2 from "../../../public/logo/fondoverde.png";
import Image from "next/image";

export function AnimatedHomeHeader() {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <div className={styles.navsection}>
      <div
        className={styles.navcontainer}
        style={{
          backgroundColor: pathname === "/contacto" ? "#39442b" : "#fdfdf1", // Cambia el color si está en /contact
        }}
      >
        <Link href="/">
          <div className={styles.headerBrand}>
            <Image src={pathname === "/contacto" ? logo2 : logo1} alt="logo" />
            <p
              style={{
                color: pathname === "/contacto" ? "#fdfdf1" : "#39442b",
              }}
            >
              SANTALUM
            </p>
          </div>
        </Link>

        <div className={styles.headerOptions}>
          <Header />
        </div>
      </div>
    </div>
  );
}
