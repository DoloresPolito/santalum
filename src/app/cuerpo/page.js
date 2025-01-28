import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ColorChangeTreatmentsOnScrollGsap from "@/components/ChangeColorTreatments";
import content from "../../jsons/corporales.json"


export const Cuerpo = ({}) => {
  return (
    <>
      <AnimatedHomeHeader />
      <div className={styles.section}>
    
        <ColorChangeTreatmentsOnScrollGsap category="cuerpo" content={content[0]}/>
      </div>
    </>
  );
};

export default Cuerpo;
