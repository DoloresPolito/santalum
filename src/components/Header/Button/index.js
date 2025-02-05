import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Button({isActive, toggleMenu}) {
  return (
    <div className={styles.button} onClick={toggleMenu}>
      <motion.div 
        className={styles.line}
        animate={{
          rotate: isActive ? 45 : 0, 
          translateY: isActive ? "1vh" : 0
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      <motion.div 
        className={styles.line}
        animate={{
          opacity: isActive ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      <motion.div 
        className={styles.line}
        animate={{
          rotate: isActive ? -45 : 0, 
          translateY: isActive ? "-1.8vh" : 0
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  );
}