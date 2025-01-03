import React from "react";
import SplitWords from "../../components/SplitWords";
import Treatments from "../../components/Treatments";
import styles from "./styles.module.scss";
import BookButton from "@/components/BookButton";
export default function Description() {
  return (
    <div className={styles.section}>
      <Treatments />
      <SplitWords />
      <BookButton />
    </div>
  );
}
