import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

import HeaderContainer from "@/structure/HeaderContainer";
import Header from "../../components/Header"
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
export const Contacto = ({

  }) => {

    return(<>
    <div className={styles.section}>
    {/* <HeaderContainer />
      <Header /> */}
      <AnimatedHomeHeader/>
    <div className={styles.container}></div>
    </div>
    
    </>)
  }


  export default Contacto;