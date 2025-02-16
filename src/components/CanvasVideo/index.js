// "use client";
// import React, { useEffect, useRef } from "react";
// import styles from "./styles.module.scss";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

// const CanvasVideo = () => {
//   const canvasRef = useRef(null);
//   const parentRef = useRef(null);

//   const canvasFrames = {
//     currentIndex: 0,
//     maxIndex: 99,
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext("2d");

//     let imagesLoaded = 0;
//     const images = [];

//     const preLoadImages = () => {
//       for (let i = 1; i <= canvasFrames.maxIndex; i++) {
//         const imageUrl = `frames/${i}.png`;
//         const img = new Image();
//         img.src = imageUrl;

//         img.onload = function () {
//           imagesLoaded++;

       
//             if (imagesLoaded === canvasFrames.maxIndex) {
//             console.log("all images loaded");
//             loadImageOnCanvas(canvasFrames.currentIndex);
//             renderAnimation();
//           }
//         };

//         img.onerror = function () {
//             console.error(`Error loading image: ${imageUrl}`);
//           };


//         images.push(img);
//       }
//     };

//     const loadImageOnCanvas = (index) => {
//       if (index >= 0 && index <= canvasFrames.maxIndex && canvas && context) {
//         let img = images[index];
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const scaleX = canvas.width / img.width;
//         const scaleY = canvas.height / img.height;
//         const scale = Math.max(scaleX, scaleY);

//         const newWidth = img.width * scale;
//         const newHeight = img.height * scale;

//         const offsetX = (canvas.width - newWidth) / 2;
//         const offsetY = (canvas.height - newHeight) / 2;

//             // Verifica si img.width está disponible
//       if (!img.width || !img.height) {
//         console.error("La imagen no tiene dimensiones válidas.");
//         return;
//       }

//         context?.clearRect(0, 0, canvas.width, canvas.height);

//         context.imageSmoothingEnabled = true;
//         context.imageSmoothingQuality = "high";

//         context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

//         canvasFrames.currentIndex = index;
//       }
//     };

//     const renderAnimation = () => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: parentRef.current,
//           start: "top top",
//           scrub: 3,
//           end: "bottom bottom",
//         //   markers: true,
//         },
//       });

//       tl.to(canvasFrames, {
//         currentIndex: canvasFrames.maxIndex,
//         ease: "linear", // Cambia la curva de animación según prefieras
//         onUpdate: function () {
//           loadImageOnCanvas(Math.floor(canvasFrames.currentIndex));
//         },
//       });

//            // Animación para cambiar el tamaño de 'parent' mientras se hace scroll
//      tl.to(parentRef.current, {
//         scaleX: 0.5,
//         scaleY: 0.5,
//         transformOrigin: "center center", // Asegura que el cambio de tamaño se haga desde el centro
//         ease: "linear",
//       }, 0);
    
//     };



//     preLoadImages();
//   },[]);
//   return (
//     <div className={styles.section}>
//       <div ref={parentRef} className={styles.parent}>
//         <div className={styles.inside}>
//           <canvas ref={canvasRef} style={{ width: "100%",   
//                 height: "100vh"  }}></canvas>
//           <h2>hola como estas</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CanvasVideo;
