import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import HeaderContainer from "@/structure/HeaderContainer";
import Header from "../../components/Header";

export const Nosotros = ({}) => {
  return (
    <>
      <div className={styles.section}>
        <HeaderContainer />
        <Header />
        <div className={styles.container}></div>
      </div>
    </>
  );
};

export default Nosotros;
