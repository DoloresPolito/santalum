"use client";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const buttonAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Project({ index, project, setModal, category }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}
    >
      <Link
        href={`/${category}/${project.id}`}
        aria-label={`Ir a ${project.titulo}`}
      />

      <div className={styles.left}>
        <h2>{project.titulo}</h2>
        <p>{project.subtitulo}</p>
      </div>

      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <Image
          src={`/${project.img}`}
          alt="tratamiento"
          width={500}
          height={300}
        />
      </motion.div>

      <motion.div
        variants={buttonAnim}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className={styles.right}
      >
        <p className={styles.buttontext}> Ver más</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
        >
          <mask
            id="path-1-outside-1_44_12722"
            maskUnits="userSpaceOnUse"
            x="-0.5"
            y="3"
            width="16"
            height="16"
            fill="#62685e"
          >
            <rect fill="#62685e" x="-0.5" y="3" width="16" height="16"></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
            ></path>
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
            fill="#62685e"
          ></path>
          <path
            d="M14.3678 11.024L14.3616 10.8241L14.4672 11.1976L14.3678 11.024ZM6.37289 15.6053H6.17289V15.4894L6.27346 15.4317L6.37289 15.6053ZM6.37289 18V18.2H6.17289V18H6.37289ZM6.5535 18L6.75283 18.0163L6.73782 18.2H6.5535V18ZM7.53081 16.2292L7.41078 16.0692L7.53081 16.2292ZM14.5 11L14.62 10.84L14.8332 11L14.62 11.16L14.5 11ZM7.53081 5.77082L7.41078 5.93079L7.53081 5.77082ZM6.5535 4V3.8H6.73782L6.75283 3.98371L6.5535 4ZM6.37289 4H6.17289V3.8H6.37289V4ZM6.37289 6.39474L6.27346 6.56827L6.17289 6.51064V6.39474H6.37289ZM14.37 10.9773L14.4694 10.8037L14.3631 11.1771L14.37 10.9773ZM0.499514 10.4945H0.299514V10.2874L0.506471 10.2946L0.499514 10.4945ZM0.499513 11.4499L0.505651 11.6498L0.299513 11.6561V11.4499H0.499513ZM14.4672 11.1976L6.47233 15.7788L6.27346 15.4317L14.2683 10.8505L14.4672 11.1976ZM6.57289 15.6053V18H6.17289V15.6053H6.57289ZM6.37289 17.8H6.5535V18.2H6.37289V17.8ZM6.35416 17.9837C6.41625 17.2238 6.8009 16.5268 7.41078 16.0692L7.65085 16.3892C7.13251 16.7781 6.8056 17.3704 6.75283 18.0163L6.35416 17.9837ZM7.41078 16.0692L14.38 10.84L14.62 11.16L7.65085 16.3892L7.41078 16.0692ZM14.38 11.16L7.41078 5.93079L7.65085 5.61084L14.62 10.84L14.38 11.16ZM7.41078 5.93079C6.8009 5.47318 6.41625 4.77623 6.35416 4.01629L6.75283 3.98371C6.8056 4.62959 7.13251 5.22192 7.65085 5.61084L7.41078 5.93079ZM6.5535 4.2H6.37289V3.8H6.5535V4.2ZM6.57289 4V6.39474H6.17289V4H6.57289ZM6.47233 6.22121L14.4694 10.8037L14.2706 11.1508L6.27346 6.56827L6.47233 6.22121ZM14.3631 11.1771L0.492557 10.6944L0.506471 10.2946L14.377 10.7774L14.3631 11.1771ZM0.699513 10.4945L0.699512 11.4499H0.299513L0.299514 10.4945H0.699513ZM0.493375 11.2499L14.3616 10.8241L14.3739 11.2239L0.505651 11.6498L0.493375 11.2499Z"
            fill="#62685e"
            mask="url(#path-1-outside-1_44_12722)"
          ></path>
        </svg>
      </motion.div>
      {/* </Link> */}
    </div>
  );
}
