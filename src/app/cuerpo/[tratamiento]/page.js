// import Treatment from "../../../components/Treatment";
import cuerpo from "../../../jsons/cuerpo.json";
import ColorChangeTreatmentsOnScrollGsap from "@/components/ChangeColorTreatments"
import { AnimatedHomeHeader } from "@/structure/NavbarToia";

export default function TreatmentPage({ params }) {
  const { tratamiento } = params;

  const data = cuerpo[0].tratamientos.find(
    (item) => item.id === tratamiento
  );

  // Si no se encuentra, puedes mostrar un mensaje de error o redirigir
  if (!data) {
    return <p style={{ marginTop: "20vh" }}>Tratamiento no encontrado.</p>;
  }

  return (
    <>
       <AnimatedHomeHeader />
      <ColorChangeTreatmentsOnScrollGsap data={data} />
    </>
  );
}