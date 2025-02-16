"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";

import styles from "./styles.module.scss";

// import ColorChangeOnScrollGsap from "@/components/ChangeColor";
import Intro from "@/structure/Intro";
// import { AnimatePresence } from "framer-motion";
// import Preloader from "../components/Preloader";
// import SwiperHeroNew from "@/components/SwiperHeroNew";
import HomeSectionSoft from "@/components/HomeSectionSoft";
import Work3 from "@/structure/Work3";
import Section from "@/structure/Section";
import FaqsSection from "@/components/FaqsSection";
import ReviewsSection from "@/structure/ReviewSection";
import Footer from "@/structure/Footer";
import Loop from "@/components/Loop";
import MovingTreatments from "@/components/MovingTreatments";


const relacionados = [ {
  "id": "labios",
  "titulo": "Tratamiento de Labios",
  "subtitulo": "Define, hidrata y da volumen con ácido hialurónico.",
  "descripcion": "El tratamiento de embellecimiento de labios busca mejorar la armonía facial, adaptándose a las necesidades de cada paciente. Se puede abordar la hidratación, perfilado, voluminización, tratamiento de código de barras, y la corrección de la comisura de los labios, usando ácido hialurónico.",
  "beneficios": [
    "Mejora la armonía de los labios.",
    "Tratamiento de hidratación, voluminización y perfilado.",
    "Resultados naturales y personalizados."
  ],
  "procedimiento": "Se puede realizar con anestesia tópica o troncular.",
  "precio": "Desde $500",
  "img":"images/cara/labios.png",
  "relacionados":["rinomodelación", "orejas-bolsas","pomulos-menton","vitaminas-faciales","revitalizacion-dermica", "bionutrilift", "peeling"]
},
{
  "id": "orejas-bolsas",
  "titulo": "Ojeras y Bolsas",
  "subtitulo": "Reduce signos de fatiga y rejuvenece la mirada.",
  "descripcion": "Las ojeras y bolsas son preocupaciones comunes en medicina estética, causadas por factores como falta de sueño, malos hábitos, alergias, envejecimiento y, principalmente, genética. La piel de los párpados es muy fina, por lo que requiere un cuidado especial con cosméticos adecuados.",
  "beneficios": [
    "Reduce la apariencia de ojeras y bolsas.",
    "Mejora el aspecto general de la zona ocular.",
    "Previene la aparición de nuevas bolsas."
  ],
  "procedimiento": "Se utiliza cosmética adecuada, carboxiterapia, ácido hialurónico, entre otros tratamientos.",
  "precio": "Desde $400",
  "img":"images/cara/ojerasbolsas.png",
  "relacionados":["rinomodelación", "labios","pomulos-menton","vitaminas-faciales","revitalizacion-dermica", "bionutrilift", "peeling"]
},
{
  "id": "pomulos-menton",
  "titulo": "Pómulos y Mentón",
  "subtitulo": "Realza los rasgos faciales con volumen y definición.",
  "descripcion": "El aumento de pómulos y mentón es común en los tratamientos estéticos faciales, indicados para mejorar la proyección y el volumen, así como tratar la flacidez facial y los surcos nasogenianos.",
  "beneficios": [
    "Mejora la proyección de los pómulos y mentón.",
    "Combate la flacidez facial.",
    "Resulta en una apariencia más juvenil y equilibrada."
  ],
  "procedimiento": "Se utiliza ácido hialurónico, hidroxiapatita cálcica o prótesis malas.",
  "precio": "Desde $600",
  "img":"images/cara/pomulosmenton.png",
  "relacionados":["rinomodelación", "labios","orejas-bolsas","vitaminas-faciales","revitalizacion-dermica", "bionutrilift", "peeling"]
},
{
  "id": "vitaminas-faciales",
  "titulo": "Vitaminas Faciales",
  "subtitulo": "Revitaliza tu piel con hidratación y luminosidad.",
  "descripcion": "El tratamiento de vitaminas faciales utiliza una fórmula avanzada basada en péptidos y 53 ingredientes activos para estimular el crecimiento epidérmico y mejorar la elasticidad de la piel. Su combinación de ingredientes revitaliza la piel, incrementa su resplandor, hidratación y elasticidad, y reduce arrugas y líneas de expresión.",
  "beneficios": [
    "Estimula el crecimiento epidérmico.",
    "Aumenta la hidratación y el tono de piel.",
    "Reduce arrugas y líneas de expresión."
  ],
  "procedimiento": "Se realiza con mesoterapia bajo anestesia tópica.",
  "precio": "135€ por sesión",
  "img":"images/cara/vitaminasfaciales.png",
  "relacionados":["rinomodelación", "labios","orejas-bolsas","pomulos-menton","revitalizacion-dermica", "bionutrilift", "peeling"]
},
{
  "id": "revitalizacion-dermica",
  "titulo": "Revitalización Dérmica",
  "subtitulo": "Hidrata y redensifica la piel para un efecto rejuvenecedor.",
  "descripcion": "La revitalización dérmica es un tratamiento de biorevitalización que mejora la apariencia de pieles fatigadas, opacas o faltas de firmeza, alisando arrugas superficiales y redensificando la dermis. Estimula la producción de colágeno y elastina, proporcionando mayor luminosidad y firmeza a la piel.",
  "beneficios": [
    "Hidratación, elasticidad, luminosidad y firmeza.",
    "Bioestimula la producción de colágeno y elastina."
  ],
  "procedimiento": "Se utiliza un vial de FILORGA® NCTF 135HA, que combina ácido hialurónico y un cóctel de vitaminas, aminoácidos, minerales, ácidos nucleicos y coenzimas.",
  "precio": "195€ por sesión",
  "img":"images/cara/revitalizaciondermica.png",
  "relacionados":["rinomodelación", "labios","orejas-bolsas","pomulos-menton","vitaminas-faciales", "bionutrilift", "peeling"]
},
{
  "id": "bionutrilift",
  "titulo": "Bionutrilift",
  "subtitulo": "Bioestimulación para un lifting facial sin cirugía.",
  "descripcion": "Bionutrilift es un tratamiento de rejuvenecimiento facial que combina ácido hialurónico reticulado con un compuesto llamado New Cellular – Bionutrición, que contiene 54 propiedades revitalizadoras. Este tratamiento bioestimula la piel para generar colágeno y elastina de manera natural, logrando un efecto lifting sin cirugía.",
  "beneficios": [
    "Hidrata la piel y mejora la luminosidad.",
    "Combate el fotoenvejecimiento y la flacidez moderada.",
    "Previene los primeros signos de envejecimiento."
  ],
  "procedimiento": "En la primera sesión, se combina 1 vial de ácido hialurónico de baja reticulación con 1 ampolla de NCTF, un complemento polirevitalizante que incluye vitaminas, enzimas, minerales y antioxidantes.",
  "precio": "350€ por sesión",
  "img":"images/cara/bionutrilift.png",
  "relacionados":["rinomodelación", "labios","orejas-bolsas","pomulos-menton","vitaminas-faciales", "revitalizacion-dermica", "peeling"]
},
{
  "id": "hidrobooster-dorothy",
  "titulo": "Hidrobooster Dorothy",
  "subtitulo": "Hidratación profunda para una piel luminosa y firme.",
  "descripcion": "El Hidrobooster Dorothy es un tratamiento de última generación que proporciona hidratación profunda y redensificación de la piel, logrando un efecto luminoso y fresco conocido como 'Glow-Dewy'.",
  "beneficios": [
    "Mejora la tersura, luminosidad e hidratación de la piel.",
    "Rejuvenecimiento cutáneo, especialmente para mujeres peri y postmenopáusicas.",
    "Previene y trata signos de fotoenvejecimiento."
  ],
  "procedimiento": "Se realiza con un ácido hialurónico reticulado de alta calidad, con resultados duraderos de aproximadamente 4 meses.",
  "precio": "300€ por sesión",
  "img":"images/cara/dorothy.png",
  "relacionados":["rinomodelación", "labios","orejas-bolsas","pomulos-menton","vitaminas-faciales", "revitalizacion-dermica", "peeling"]
}]


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <div className={styles.main}>
      {/* <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : ( */}
          <>
            <Intro />
            <Loop/>
            <HomeSectionSoft/>
            <Work3 />
            <Section />
         
            {/* <MovingTreatments relacionados={relacionados}/> */}
            {/* <SwiperHeroNew /> */}

       
            <FaqsSection />
            <ReviewsSection />
          </>
        {/* )}
      </AnimatePresence> */}
      <Footer />
    </div>
  );
}

{
  /* <ColorChangeOnScrollGsap /> */
}
{
  /* <Intro /> */
}
{
  /* <Section/> */
}

// import Description from "@/structure/Description";
// import Section from "@/structure/Section";
// import Loop from "@/components/Loop";
// import FaqsSection from "@/components/FaqsSection";
// import Treatments from "@/components/Treatments";
// import SwiperHeroNew from "@/components/SwiperHeroNew";
// import { AnimatedHomeHeader } from "@/structure/NavbarToia";
// import styles from "./styles.module.scss";
// import Carrousel from "@/components/Carrousel";

// import MovingTreatments from "@/components/MovingTreatments";
// import HomeSectionSoft from "@/components/HomeSectionSoft";
// import AnimationPrueba from "@/components/AnimationsPrueba";
// import CanvasVideo from "@/components/CanvasVideo";
{
  /*  <CanvasVideo/>
        <Loop />
        <HomeSectionSoft />
        <MovingTreatments />
        <Section />
   

        
      <FaqsSection /> */
}
{
  /* <SwiperHeroNew/> */
}
