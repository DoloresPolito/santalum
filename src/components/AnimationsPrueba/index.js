// import {
//   motion,
//   useAnimation,
//   useInView,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { useEffect, useRef } from "react";
// import styles from "./styles.module.scss"; // Importamos los estilos en el componente

// const gridContainerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// const gridSquareVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// const svgIconVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//     fill: "rgba(252, 211, 77, 0)",
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     fill: "rgba(252, 211, 77, 1)",
//   },
// };

// const AnimationPrueba = () => {
//   const { scrollYProgress: completionProgress } = useScroll();
//   const containerRef = useRef(null);

//   const isInView = useInView(containerRef, { once: true });
//   const mainControls = useAnimation();

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end end"],
//   });

//   const paragraphOneValue = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["-100%", "0%"]
//   );
//   const paragraphTwoValue = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["100%", "0%"]
//   );

//   useEffect(() => {
//     if (isInView) {
//       mainControls.start("visible");
//     }
//   }, [isInView]);

//   return (
//     <div
//       className={`flex flex-col gap-10 overflow-x-hidden ${styles.container}`}
//     >
//       <motion.section
//         variants={gridContainerVariants}
//         initial="hidden"
//         animate="show"
//         className={`grid grid-cols-3 p-10 gap-10 ${styles.gridContainer}`}
//       >
//         {/* Fade Up */}
//         <motion.div
//           variants={gridSquareVariants}
//           className={`bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10 ${styles.gridSquare}`}
//         >
//           <motion.div
//             className="w-20 h-20 bg-stone-100 rounded-lg"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//           />
//           <motion.div
//             className="w-20 h-20 bg-stone-100 rounded-full"
//             initial={{ opacity: 0, y: -100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//           />
//         </motion.div>
//         {/* Otros bloques de animación... */}
//         <motion.div
//           variants={gridSquareVariants}
//           className={`bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10 ${styles.gridSquare}`}
//         >
//           <motion.div
//             className="w-1/3 h-1/3 shadow-md bg-rose-400"
//             // initial={{ opacity: 0, y: 100 }}
//             animate={{
//               scale: [1, 2, 2, 1],
//               rotate: [0, 90, 90, 0],
//               borderRadius: ["10%", "10%", "50%", "10%"],
//             }}
//             transition={{
//               duration: 5,
//               ease: "easeInOut",
//               repeat: 2,
//               repeatDelay: 1,
//             }}
//           />
//         </motion.div>

//         <motion.div
//           variants={gridSquareVariants}
//           className={`bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10 ${styles.gridSquare}`}
//         >
//           <motion.div className="w-40 aspect-square  bg-gray-50/20 rounded-xl ">
//             <motion.div
//               className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
//               style={{ scaleY: completionProgress }}
//             />
//           </motion.div>
//         </motion.div>

//         <motion.div
//           variants={gridSquareVariants}
//           className={`bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10 ${styles.gridSquare}`}
//         >
//           <motion.svg
//             xmls="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="w-1/2 stroke-amber-500 stroke-[0.5]"
//           >
//             <motion.path
//               d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
//               variants={svgIconVariants}
//               initial="hidden"
//               animate="visible"
//               transition={{
//                 fill: {
//                   duration: 2,
//                   ease: "easeIn",
//                   delay: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   repeatDelay: 1,
//                 },
//               }}
//             />
//           </motion.svg>
//         </motion.div>
//       </motion.section>
//       <section
//         className={`flex flex-col gap-10 mb-10 ${styles.textSection}`}
//         ref={containerRef}
//       >
//         <motion.h1
//           className={`text-5xl tracking-wide text-slate-100 text-center ${styles.heading}`}
//           animate={mainControls}
//           initial="hidden"
//           variants={{
//             hidden: { opacity: 0, y: 75 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ delay: 0.3 }}
//         >
//           Just Keep Scrolling
//         </motion.h1>
//         <motion.p
//           style={{ translateX: paragraphOneValue }}
//           className={`text-slate-100 font-thin text-4xl w-1/2 mx-auto ${styles.paragraph}`}
//         >
//           This is a basic tutorial on how to get up and running with Framer
//           Motion with some TailwindCSS. If you enjoyed this video, please leave
//           a like and also subscribe.
//         </motion.p>
//         <motion.p
//           style={{ translateX: paragraphTwoValue }}
//           className={`text-slate-100 font-thin text-4xl w-1/2 mx-auto ${styles.paragraph}`}
//         >
//           Have fun playing with Framer Motion. It is a very powerful library,
//           when used properly. Add some life to your websites.
//         </motion.p>
//       </section>
//     </div>
//   );
// };

// export default AnimationPrueba;
