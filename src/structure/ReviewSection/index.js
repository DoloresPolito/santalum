import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedDiv from "@/components/AnimatedDiv";

const ReviewsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const medium = 1200;

  const cards = [
    {
      name: "Nicolas Romero",
      text: "Muchas gracias Pablo. Me siento feliz por el resultado. Sin duda la confianza antes y después del trasplante es muy importante. Mi cambio fue increíble en 4 meses ¡Muchas gracias!",
    },
    {
      name: "Giorgio Rossini",
      text: "Me hice el tratamiento hace dos meses y la verdad es que en pocos lugares he recibido un trato tan profesional y a la vez relajado y familiar. Me sentí cómoda desde el primer momento. La operación fue un éxito y el postoperatorio también.  ¡Gracias Pablo y equipo!",
    },
    {
      name: "Toni Perez Comas",
      text: "Llevo un año y medio con mi implante capilar y no puedo estar más feliz. Pablo es un gran profesional, no tuve que salir de la isla y a un precio muy asequible. ¡Gracias!",
    },
    {
      name: "Alan Karakus",
      text: "No puedo estar más agradecido por el trato recibido por parte del Dr. Pablo Maradey y su equipo. Una operación sin complicaciones, amable y con un resultado excepcional. Te estaré agradecido toda mi vida. Adiós complejos.",
    },
    {
      name: "Wellington Freitas",
      text: "Estoy súper contenta con el resultado, me has devuelto unos 10 años que me había quitado la calvicie, lo recomiendo sin duda.",
    },
    {
      name: "Angel TS",
      text: "Muy contento con el resultado, Pablo muy atento y con un buen equipo que transmite tranquilidad y se preocupa por ti. Muchas gracias",
    },
    {
      name: "Ricardo Fraga",
      text: "Muy buena experiencia, fenomenal trato por parte de Pablo, encantado con los resultados, muchas gracias.",
    },
    {
      name: "Rodrigo Fernandez Leon",
      text: "Muy buen trato y muy profesionales!! Trato muy cercano y experimentado que no defrauda en los resultados!!",
    },
    {
      name: "Francisco Garcia Sanchez",
      text: "Excelente trato, resultados y seguimiento! Gracias Pablo, eres un gran profesional.",
    },
    {
      name: "Joaquin Ignacio Aguirre Cerino",
      text: "Doctor Pablo Maradey and his team are the most professional that you can find in the sector, a treatment success.",
    },
  ];

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.titles}>
        <AnimatedDiv>
          <h6 className={`${styles.heading} `}>RESEÑAS</h6>
        </AnimatedDiv>
        <h3 className={styles.reviewstitle}>
          Conoce lo que nuestros pacientes piensan de nosotros
        </h3>
      </div>
      <AnimatedDiv>
        <div className={styles.container}>
          <div className={styles.carouselcontainer}>
            <div className={styles.carouselcontent}>
              <Swiper
                speed={600}
                parallax={true}
                navigation={{
                  nextEl: `.${styles.customnext}`,
                  prevEl: `.${styles.customprev}`,
                }}
                modules={[Parallax, Pagination, Navigation]}
                slidesPerView={width > medium ? 3.5 : width > 1000 ? 2 : 1}
        
                slidesPerGroup={1}
                spaceBetween={10}
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <Card name={card.name} text={card.text} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.arrowscontainer}>
              <div className={styles.customprev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                >
                  <mask
                    id="path-1-outside-1_44_12722"
                    maskUnits="userSpaceOnUse"
                    x="-0.5"
                    y="3"
                    width="16"
                    height="16"
                    fill="#62685e"
                  >
                    <rect
                      fill="#62685e"
                      x="-0.5"
                      y="3"
                      width="16"
                      height="16"
                    ></rect>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
                    ></path>
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
                    fill="#62685e"
                  ></path>
                  <path
                    d="M14.3678 11.024L14.3616 10.8241L14.4672 11.1976L14.3678 11.024ZM6.37289 15.6053H6.17289V15.4894L6.27346 15.4317L6.37289 15.6053ZM6.37289 18V18.2H6.17289V18H6.37289ZM6.5535 18L6.75283 18.0163L6.73782 18.2H6.5535V18ZM7.53081 16.2292L7.41078 16.0692L7.53081 16.2292ZM14.5 11L14.62 10.84L14.8332 11L14.62 11.16L14.5 11ZM7.53081 5.77082L7.41078 5.93079L7.53081 5.77082ZM6.5535 4V3.8H6.73782L6.75283 3.98371L6.5535 4ZM6.37289 4H6.17289V3.8H6.37289V4ZM6.37289 6.39474L6.27346 6.56827L6.17289 6.51064V6.39474H6.37289ZM14.37 10.9773L14.4694 10.8037L14.3631 11.1771L14.37 10.9773ZM0.499514 10.4945H0.299514V10.2874L0.506471 10.2946L0.499514 10.4945ZM0.499513 11.4499L0.505651 11.6498L0.299513 11.6561V11.4499H0.499513ZM14.4672 11.1976L6.47233 15.7788L6.27346 15.4317L14.2683 10.8505L14.4672 11.1976ZM6.57289 15.6053V18H6.17289V15.6053H6.57289ZM6.37289 17.8H6.5535V18.2H6.37289V17.8ZM6.35416 17.9837C6.41625 17.2238 6.8009 16.5268 7.41078 16.0692L7.65085 16.3892C7.13251 16.7781 6.8056 17.3704 6.75283 18.0163L6.35416 17.9837ZM7.41078 16.0692L14.38 10.84L14.62 11.16L7.65085 16.3892L7.41078 16.0692ZM14.38 11.16L7.41078 5.93079L7.65085 5.61084L14.62 10.84L14.38 11.16ZM7.41078 5.93079C6.8009 5.47318 6.41625 4.77623 6.35416 4.01629L6.75283 3.98371C6.8056 4.62959 7.13251 5.22192 7.65085 5.61084L7.41078 5.93079ZM6.5535 4.2H6.37289V3.8H6.5535V4.2ZM6.57289 4V6.39474H6.17289V4H6.57289ZM6.47233 6.22121L14.4694 10.8037L14.2706 11.1508L6.27346 6.56827L6.47233 6.22121ZM14.3631 11.1771L0.492557 10.6944L0.506471 10.2946L14.377 10.7774L14.3631 11.1771ZM0.699513 10.4945L0.699512 11.4499H0.299513L0.299514 10.4945H0.699513ZM0.493375 11.2499L14.3616 10.8241L14.3739 11.2239L0.505651 11.6498L0.493375 11.2499Z"
                    fill="#62685e"
                    mask="url(#path-1-outside-1_44_12722)"
                  ></path>
                </svg>
              </div>
              <div className={styles.customnext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                >
                  <mask
                    id="path-1-outside-1_44_12722"
                    maskUnits="userSpaceOnUse"
                    x="-0.5"
                    y="3"
                    width="16"
                    height="16"
                    fill="#62685e"
                  >
                    <rect
                      fill="#62685e"
                      x="-0.5"
                      y="3"
                      width="16"
                      height="16"
                    ></rect>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
                    ></path>
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3678 11.024L6.37289 15.6053V18H6.5535C6.61093 17.2971 6.9667 16.6525 7.53081 16.2292L14.5 11L7.53081 5.77082C6.9667 5.34755 6.61093 4.70291 6.5535 4H6.37289V6.39474L14.37 10.9773L0.499514 10.4945L0.499513 11.4499L14.3678 11.024Z"
                    fill="#62685e"
                  ></path>
                  <path
                    d="M14.3678 11.024L14.3616 10.8241L14.4672 11.1976L14.3678 11.024ZM6.37289 15.6053H6.17289V15.4894L6.27346 15.4317L6.37289 15.6053ZM6.37289 18V18.2H6.17289V18H6.37289ZM6.5535 18L6.75283 18.0163L6.73782 18.2H6.5535V18ZM7.53081 16.2292L7.41078 16.0692L7.53081 16.2292ZM14.5 11L14.62 10.84L14.8332 11L14.62 11.16L14.5 11ZM7.53081 5.77082L7.41078 5.93079L7.53081 5.77082ZM6.5535 4V3.8H6.73782L6.75283 3.98371L6.5535 4ZM6.37289 4H6.17289V3.8H6.37289V4ZM6.37289 6.39474L6.27346 6.56827L6.17289 6.51064V6.39474H6.37289ZM14.37 10.9773L14.4694 10.8037L14.3631 11.1771L14.37 10.9773ZM0.499514 10.4945H0.299514V10.2874L0.506471 10.2946L0.499514 10.4945ZM0.499513 11.4499L0.505651 11.6498L0.299513 11.6561V11.4499H0.499513ZM14.4672 11.1976L6.47233 15.7788L6.27346 15.4317L14.2683 10.8505L14.4672 11.1976ZM6.57289 15.6053V18H6.17289V15.6053H6.57289ZM6.37289 17.8H6.5535V18.2H6.37289V17.8ZM6.35416 17.9837C6.41625 17.2238 6.8009 16.5268 7.41078 16.0692L7.65085 16.3892C7.13251 16.7781 6.8056 17.3704 6.75283 18.0163L6.35416 17.9837ZM7.41078 16.0692L14.38 10.84L14.62 11.16L7.65085 16.3892L7.41078 16.0692ZM14.38 11.16L7.41078 5.93079L7.65085 5.61084L14.62 10.84L14.38 11.16ZM7.41078 5.93079C6.8009 5.47318 6.41625 4.77623 6.35416 4.01629L6.75283 3.98371C6.8056 4.62959 7.13251 5.22192 7.65085 5.61084L7.41078 5.93079ZM6.5535 4.2H6.37289V3.8H6.5535V4.2ZM6.57289 4V6.39474H6.17289V4H6.57289ZM6.47233 6.22121L14.4694 10.8037L14.2706 11.1508L6.27346 6.56827L6.47233 6.22121ZM14.3631 11.1771L0.492557 10.6944L0.506471 10.2946L14.377 10.7774L14.3631 11.1771ZM0.699513 10.4945L0.699512 11.4499H0.299513L0.299514 10.4945H0.699513ZM0.493375 11.2499L14.3616 10.8241L14.3739 11.2239L0.505651 11.6498L0.493375 11.2499Z"
                    fill="#62685e"
                    mask="url(#path-1-outside-1_44_12722)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default ReviewsSection;

const Card = ({ name, text }) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardtop}>
        <p className={styles.cardtext}>{name}</p>
      </div>
      <div className={styles.cardbottom}>
        <p className={styles.cardname}>{text}</p>
      </div>
    </div>
  );
};
