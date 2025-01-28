// import Treatment from "../../../components/Treatment";
import cara from "../../../jsons/faciales.json";

import { AnimatedHomeHeader } from "@/structure/NavbarToia";

export default function TreatmentPage({ params }) {
  const { tratamiento } = params;

  const data = cara[0].tratamientos.find(
    (item) => item.id === tratamiento
  );

  // Si no se encuentra, puedes mostrar un mensaje de error o redirigir
  if (!data) {
    return <p style={{ marginTop: "20vh" }}>Tratamiento no encontrado.</p>;
  }

  return (
    <>
       <AnimatedHomeHeader />

       <h2>{data.titulo}</h2>
       <h2>{data.descripcion}</h2>
       <h2>{data.beneficios[0]}</h2>
       <h2>{data.beneficios[1]}</h2>
       <h2>{data.beneficios[2]}</h2>

    </>
  );
}