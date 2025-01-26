"use client";
import React from "react";
  // import { useEffect, useState } from "react";
  // import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import Header from "@/components/Header";
import Link from "next/link";
export function AnimatedHomeHeader() {
  return (
    <div className={styles.navsection}>
      <div className={styles.navcontainer}>
        <div className={styles.headerBrand}>
          <Link href='/'>
          <p>SANTALUM</p>
          </Link>
        </div>

        <div className={styles.headerOptions}>
          <Header />
        </div>
      </div>
    </div>
    // </motion.nav>
  );
}
