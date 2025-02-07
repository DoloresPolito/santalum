import React from "react";
import styles from "./styles.module.scss";
import content from "../../jsons/capilares.json";
import HoverTreatments from "../../components/HoverTreatments";
import NewFooter from "@/structure/Footer";
export const Capilar = ({}) => {
  return (
    <>
      <div className={styles.section}>
        <HoverTreatments content={content[0]} category="capilar"/>
      </div>
      <NewFooter />
    </>
  );
};

export default Capilar;