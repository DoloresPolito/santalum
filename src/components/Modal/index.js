import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
// import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0,
       x:"50%", y:"50%"
      },
    enter: {scale: 1, 
      x:"150%", y:"-30%",
       transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0,
      x:"50%", y:"0%",
       transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function index({modal, content}) {

  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);



  

  return (
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div
             style={{top: index * -100 + "%"}} 
            className={styles.modalSlider}>
            {
                content.tratamientos.map( (project, index) => {
                const { img, color } = project
                return <div className={styles.modal} key={`modal_${index}`}>
                    <Image 
                    src={`/images/nuevas/${img}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>VER MÁS</motion.div>
    </>
  )
}