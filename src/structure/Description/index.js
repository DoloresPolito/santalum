import React from "react";
import styles from "./styles.module.scss";
import Loop from "@/components/Loop";

import SplitWords from "@/components/SplitWords";
export default function Description() {
  return (
    <div className={styles.section}>
      <div className={styles.logoscontainer}>
        <Loop reverse="true" />
      </div>
      {/* <SplitWords /> */}



    </div>
  );
}
