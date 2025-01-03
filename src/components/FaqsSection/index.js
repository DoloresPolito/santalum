"use client";
import { useState } from "react";
import AccordionItem from "@/components/AccordionItem";
import styles from "./styles.module.scss";
import { useAnimation } from "framer-motion";

export default function FaqsSection() {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  const faqsA = [
    {
      id: 1,
      faq: "Qué riesgos tiene la medicina estética?",
      ans: "Los tratamientos tienen ínfimas probabilidades de riesgo, especialmente los más conservadores. Si hablamos de cirugía estética, los riesgos van a ser aquellos propios de la misma intervención, aunque ahora la tecnología avanzada permite realizarla de forma mínimamente invasiva. Para evitar riesgos, lo mejor es contar con expertos en medicina estética.",
    },
    {
      id: 2,
      faq: "¿Para qué tipo de personas están adaptados los tratamientos?",
      ans: "Lo mejor es que los candidatos estén siempre sanos, sin enfermedades no controladas En caso de tener alguna enfermedad (hipertensión, cardiopatías, restricciones pulmonares, insuficiencia hepática o renal, entre otras) se debe comunicar de inmediato para poder adaptar el tratamiento.",
    },
    {
      id: 3,
      faq: "¿Existen límites de edad para someterse a los tratamientos?",
      ans: "En sí, pueden someterse todos aquellos mayores de edad (o menos con autorización). Realmente, no existe ningún límite de edad para someterse a los procedimientos. De hecho, cada vez son más las personas de alrededor de 50 y 60 años las que se someten a tratamientos estéticos. La edad no tiene por qué condicionar los resultados.",
    },
    {
      id: 4,
      faq: "¿Qué preparativos debemos tener en cuenta antes de someternos?",
      ans: "Antes de realizar el tratamiento, habrá que llevar a cabo una serie de medidas. Por ejemplo, habrá que modificar algunas pautas de medicación si se están tomando, especialmente anticoagulantes. También puede haber modificaciones los días previos a la intervención en cuanto a alimentación e ingesta de líquidos, así como de restricción en el consumo de tabaco y alcohol. Dependerá del tratamiento elegido.",
    },

    {
      id: 5,
      faq: "¿Hay algún motivo por el que no podamos someternos a un tratamiento?",
      ans: "Aquellas personas que tengan desequilibrios psíquicos es posible que no sean candidatos adecuados para este tipo de tratamientos. Así mismo, las mujeres embarazadas también pueden estar limitadas a determinados tratamientos, aunque sea de forma temporal. Lo mejor es que el médico sea quien establezca un diagnóstico preciso y autorice el tratamiento.",
    },
    {
      id: 6,
      faq: "¿Existen opciones no quirúrgicas para rejuvenecer el rostro?",
      ans: "Dentro de la medicina estética, existen muchos tratamientos poco invasivos. El relleno de arrugas del rostro, la mesoterapia facial o la inyección de toxina botulínica pueden ser algunos de los conocidos para poder aportar esa vitalidad y jovialidad a la cara. Al contrario de la cirugía estética, estos tratamientos son menos complejos y no requieren tiempo de postoperatorio. De hecho, los resultados son visibles de forma inmediata.",
    },
    {
      id: 7,
      faq: "¿Qué beneficios aporta la medicina estética?",
      ans: "La mejora de la imagen y el aumento de la autoestima pueden ser dos puntos muy importantes para poder gozar de mayor salud. El efecto positivo psicológico ha cambiado la vida de muchos pacientes, con una total mejora de la autoestima.",
    },
    {
      id: 8,
      faq: "¿Cuáles son los tratamientos estéticos más demandados?",
      ans: "Los tratamientos faciales más solicitados son el aumento de labios y aquellos relacionados con el envejecimiento de la piel, como la toxina botulínica o el ácido hialurónico. Por otro lado, entre los tratamientos corporales más demandados resaltan la depilación láser, los tratamientos anticelulitis y aquellos que luchan contra la grasa localizada.",
    },

    // {
    //   id: 9,
    //   faq: "¿Qué tratamientos quirúrgicos son más solicitados?",
    //   ans: "Dentro de la cirugía estética, las operaciones estéticas más populares son el aumento de pecho, la liposucción y la abdominoplastia.",
    // },

    {
      id: 10,
      faq: "¿Dónde es mejor realizarse un tratamiento estético?",
      ans: "Ante el boom de la medicina estética, numerosos centros han abierto sus puertas. Llueven las promociones, pero ¿son centros de confianza? A la hora de elegir un centro para realizar un tratamiento, debes comprobar que cuenten con expertos en medicina estética y tecnología certificada. En nuestro centro de estética en Alcalá de Henares, podemos asesorarte y dar respuesta a las preguntas sobre medicina estética que tengas. Ven a conocernos.",
    },
  ];

  return (
    <>
      <div className={styles.faqssection}>
        <h6 className={`${styles.heading} `}>PREGUNTAS FRECUENTES</h6>

        <div className={styles.faqscontainer}>
          {faqsA.map((question) => (
            <AccordionItem
              key={question.id}
              active={active}
              handleToggle={() => handleToggle(question.id)}
              id={question.id}
              header={question.faq}
              content={question.ans}
            />
          ))}
        </div>
      </div>
    </>
  );
}
