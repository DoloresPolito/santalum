import capilar from "../../../jsons/capilares.json";
import { AnimatedHomeHeader } from "@/structure/NavbarToia";
import TreatmentItem from "@/components/TreatmentItem";
import styles from "./styles.module.scss";


export default function TreatmentPage({ params }) {
  const { tratamiento } = params;

  

  const data = capilar[0].tratamientos.find((item) => item.id === tratamiento);

  // Si no se encuentra, puedes mostrar un mensaje de error o redirigir
  if (!data) {
    return <p style={{ marginTop: "20vh" }}>Tratamiento no encontrado.</p>;
  }

  return (
    <>
      <div className={styles.section}>
        <AnimatedHomeHeader />

        <TreatmentItem data={data} />


      </div>
    </>
  );
}
