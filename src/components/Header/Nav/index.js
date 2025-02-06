import styles from "./styles.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import Link from "next/link";

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: null });

  const underline = {
    initial: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <motion.p
                  onMouseOver={() => setSelectedLink({ isActive: true, index: i })}
                  onMouseLeave={() => setSelectedLink({ isActive: false, index: i })}
                  className={selectedLink.isActive && selectedLink.index === i ? styles.active : ""}
                >
                  <Link href={href} className={styles.textContainer}>
                    {title}
                    <motion.span
                      className={styles.underline}
                      variants={underline}
                      initial="initial"
                      animate={selectedLink.isActive && selectedLink.index === i ? "hover" : "initial"}
                    />
                  </Link>
                </motion.p>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              key={`f_${i}`}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
