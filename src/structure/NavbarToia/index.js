"use client";
import React from "react";
  // import { useEffect, useState } from "react";
  // import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
import logo from "../../../public/logo/fondoblanco.png"
import Image from "next/image";

export function AnimatedHomeHeader() {
  return (
    <div className={styles.navsection}>
      <div className={styles.navcontainer}>
      <Link href='/'>
        <div className={styles.headerBrand}>
     
            <Image src={logo} alt="logo"/>
          <p>SANTALUM</p>
    
        </div>
        </Link>

        <div className={styles.headerOptions}>
          <Header />
        </div>
      </div>
    </div>
    // </motion.nav>
  );
}
