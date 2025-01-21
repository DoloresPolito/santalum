import React from "react";
// import Image from "next/image";
// import Background from "../../../public/images/fondo1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
// import Header from "../../components/Header";
// import HeaderContainer from "../HeaderContainer";
import SwiperHero from "@/components/SwiperHero";

import { AnimatedHomeHeader } from "../NavbarToia";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className={styles.section}>
      {/* <HeaderContainer />
      <Header /> */}


      {/* <motion.div style={{ y }} className={styles.relative}>
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div> */}
      <SwiperHero/>
    </div>
  );
}
