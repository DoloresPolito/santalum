"use client";
import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "En el equipo de profesionales que formamos Clínica Santalum creemos que el bienestar de las personas pasa por una reconciliación entre su estado anímico y su aspecto físico. Para ello ofrecemos un cuidado y una atención especial en cada uno de nuestros tratamientos para conseguir resultados bellos y naturales, y para que puedas presentar un aspecto cuidado y saludable, en definitiva, para que te sientas bien.";

export default function Index() {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main ref={container} className={styles.main}>
      <div className={styles.top} >
        <p>SOBRE NOSOTROS</p>

      </div>
      <div ref={body} className={styles.body}>
        {splitWords(phrase)}
      </div>
    </main>
  );
}
