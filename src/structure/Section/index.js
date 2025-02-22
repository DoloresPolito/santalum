import Image from "next/image";
import Background from "../../../public/images/work/tratcuerpo.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <>
      <div className={styles.firstcontainer}></div>
      <div
        ref={container}
        className={styles.section}

        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
       
        <div className={styles.relative}>
         
          <p className={styles.texto}>
            Descubre tu <span>mejor versión </span>con tratamientos personalizados para tu
           <span> rostro, cuerpo y cabello.</span>
          </p>
        </div>
  
        <div className={styles.fixed}>
          <motion.div style={{ y }} className={styles.imagecontainer}>
            <Image
              src={Background}
              fill
              alt="image"
              style={{ objectFit: "cover" }}
              priority="true"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
