import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ColorChangeTreatmentsOnScrollGsap from "@/components/ChangeColorTreatments";
import content from "../../jsons/faciales.json";

export const Cara = ({}) => {
  return (
    <>
      <AnimatedHomeHeader />
      <div className={styles.section}>
        <ColorChangeTreatmentsOnScrollGsap
          category="cara"
          content={content[0]}
        />
      </div>
    </>
  );
};

export default Cara;