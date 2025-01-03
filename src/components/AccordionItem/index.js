import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export const AccordionItem = ({
  handleToggle,
  active,
  header,
  id,
  content,
}) => {
  const isActive = active === id;

  return (
    <div className={styles.card}>
      <div onClick={() => handleToggle(id)} className={styles.header}>

        {/* <h1>{id}</h1> */}
        {header}

        {/* Flecha animada */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="25"
          viewBox="0 0 40 25"
          fill="none"
          animate={{ rotate: isActive ? 180 : 0 }} // Rotación de la flecha
          transition={{ duration: 0.3 }} // Duración de la rotación
        >
          <mask
            id="path-1-outside-1_2010_4045"
            maskUnits="userSpaceOnUse"
            x="6.19727"
            y="4.27783"
            width="28"
            height="17"
            fill="black"
          >
            <rect
              fill="white"
              x="6.19727"
              y="4.27783"
              width="28"
              height="17"
            ></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.0986 20.1081L11.6109 4.9999H7.19727V5.33941C8.49156 5.44727 9.67599 6.10955 10.4456 7.15575L20.0986 20.2778L29.7517 7.15575C30.5213 6.10955 31.7057 5.44727 33 5.33941V4.9999L28.5864 4.9999L20.0986 20.1081Z"
            ></path>
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0986 20.1081L11.6109 4.9999H7.19727V5.33941C8.49156 5.44727 9.67599 6.10955 10.4456 7.15575L20.0986 20.2778L29.7517 7.15575C30.5213 6.10955 31.7057 5.44727 33 5.33941V4.9999L28.5864 4.9999L20.0986 20.1081Z"
            fill="#62685E"
          ></path>
          <path
            d="M11.6109 4.9999V4.78172H11.7386L11.8011 4.89304L11.6109 4.9999ZM20.0986 20.1081L20.2888 20.2149L20.0986 20.5535L19.9084 20.2149L20.0986 20.1081ZM7.19727 4.9999H6.97908V4.78172H7.19727V4.9999ZM7.19727 5.33941L7.17915 5.55684L6.97908 5.54017V5.33941H7.19727ZM10.4456 7.15575L10.2699 7.28503L10.4456 7.15575ZM20.0986 20.2778L20.2744 20.4071L20.0986 20.646L19.9229 20.4071L20.0986 20.2778ZM29.7517 7.15575L29.9274 7.28503L29.7517 7.15575ZM33 5.33941H33.2182V5.54017L33.0181 5.55684L33 5.33941ZM33 4.9999V4.78172H33.2182V4.9999H33ZM28.5864 4.9999L28.3962 4.89304L28.4587 4.78172H28.5864V4.9999ZM11.8011 4.89304L20.2888 20.0012L19.9084 20.2149L11.4207 5.10677L11.8011 4.89304ZM7.19727 4.78172H11.6109V5.21808H7.19727V4.78172ZM6.97908 5.33941V4.9999H7.41545V5.33941H6.97908ZM10.2699 7.28503C9.53758 6.28961 8.41063 5.65946 7.17915 5.55684L7.21538 5.12198C8.57249 5.23507 9.81439 5.92949 10.6214 7.02646L10.2699 7.28503ZM19.9229 20.4071L10.2699 7.28503L10.6214 7.02646L20.2744 20.1485L19.9229 20.4071ZM19.9229 20.1485L29.5759 7.02646L29.9274 7.28503L20.2744 20.4071L19.9229 20.1485ZM29.5759 7.02646C30.3829 5.92949 31.6248 5.23507 32.9819 5.12198L33.0181 5.55684C31.7866 5.65946 30.6597 6.28961 29.9274 7.28503L29.5759 7.02646ZM32.7818 5.33941V4.9999H33.2182V5.33941H32.7818ZM33 5.21808L28.5864 5.21808V4.78172L33 4.78172V5.21808ZM28.7766 5.10677L20.2888 20.2149L19.9084 20.0012L28.3962 4.89304L28.7766 5.10677Z"
            fill="#62685E"
            mask="url(#path-1-outside-1_2010_4045)"
          ></path>
        </motion.svg>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.35 }}
        className={styles.motionContent}
      >
        <div className={styles.content}>{content}</div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;