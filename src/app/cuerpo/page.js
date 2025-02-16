import React from "react";
import styles from "./styles.module.scss";
// import { AnimatedHomeHeader } from "@/structure/NavbarToia";
// import ColorChangeTreatmentsOnScrollGsap from "@/components/ChangeColorTreatments";
import content from "../../jsons/corporales.json";
import HoverTreatments from "../../components/HoverTreatments";
import NewFooter from "@/structure/Footer";
import PageTransition from "@/structure/PageTransition";
export const Cuerpo = ({}) => {
  return (
    <>
      <PageTransition>
      <div className={styles.section}>

        {/* <ColorChangeTreatmentsOnScrollGsap
          category="cuerpo"
          content={content[0]}
        /> */}

        <HoverTreatments content={content[0]} category="cuerpo"/>
      </div>
      <NewFooter/>
      </PageTransition>
    </>
  );
};

export default Cuerpo;
