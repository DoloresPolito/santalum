import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import diamante from "../../../public/images/icons/diamante.png";

const Loop = ({ reverse }) => {
  const logos = [
    { text: "TRATAMIENTOS PERSONALIZADOS" },
    { text: "ESTETICA CERTIFICADA" },
    { text: "PROFESIONALISMO MÉDICO" },
  ];

  return (
    <div className={`${styles.loopSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.marquee}>
        {logos.map((logo, index) => (
          <div className={styles.logoWrapper} key={`loop-${index}`}>
            <p>{logo.text}</p>
            {/* <Image
              src={diamante}
              alt="diamante"
              width={150}
              height={120}
              className={styles.logo}
            /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clipPath="url(#clip0_2041_4008)">
                <mask
                  id="mask0_2041_4008"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="25"
                >
                  <path
                    d="M24 0.184204H0V24.8158H24V0.184204Z"
                    fill="white"
                  ></path>
                </mask>
                <g mask="url(#mask0_2041_4008)">
                  <path
                    d="M12 24.8158C11.6526 13.1481 11.3686 12.8584 0 12.5C11.3686 12.1434 11.6508 11.8519 12 0.184204C12.3474 11.8519 12.6314 12.1416 24 12.5C12.6314 12.8584 12.3492 13.1445 12 24.8158Z"
                    fill="#62685E"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2041_4008">
                  <rect
                    width="24"
                    height="24.6316"
                    fill="white"
                    transform="translate(0 0.184204)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loop;
