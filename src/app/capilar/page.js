import React from "react";
import styles from "./styles.module.scss";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import ColorChangeTreatmentsOnScrollGsap from "@/components/ChangeColorTreatments";
import content from "../../jsons/capilares.json";

export const Capilar = ({}) => {
  return (
    <>
      <AnimatedHomeHeader />
      <div className={styles.section}>
        <ColorChangeTreatmentsOnScrollGsap
          category="capilar"
          content={content[0]}
        />
      </div>
    </>
  );
};

export default Capilar;
