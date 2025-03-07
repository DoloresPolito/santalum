import React from "react";
import { useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import SwiperHeroNew from "@/components/SwiperHeroNew";
import { AnimatedHomeHeader } from "../NavbarToia";
export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className={styles.section} ref={container}>
      <AnimatedHomeHeader />
      <SwiperHeroNew />
    </div>
  );
}
