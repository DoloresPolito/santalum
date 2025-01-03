import React from "react";
import SplitWords from "@/components/SplitWords";
import styles from "./styles.module.scss";
import Loop from "@/components/Loop";
export default function Description() {
  return (
    <div className={styles.section}>
      <div className={styles.logoscontainer}>
        <Loop reverse="true" />
      </div>
      <SplitWords />



    </div>
  );
}
