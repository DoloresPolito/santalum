import React from "react";
import SplitWords from "../../components/SplitWords";
import Treatments from "../../components/Treatments";
import styles from "./styles.module.scss";
import Loop from "@/components/Loop";
export default function Description() {
  return (
    <div className={styles.section}>
  
      <Treatments />
      <SplitWords />
      {/* <p className="text-[7.5vw] uppercase text-center max-w-[50vw] leading-none">
        The quick brown fox jumps over the lazy dog
      </p> */}
    </div>
  );
}
