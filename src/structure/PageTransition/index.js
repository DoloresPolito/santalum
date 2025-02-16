"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}

        initial= {{ y: "0.1%", opacity: 0.8 }} // Empieza fuera de pantalla a la derecha
        animate= {{ y: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
        // exit= {{ x: "-50%", opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }}


        // initial={{ opacity: 0.8}}
        // animate={{ opacity: 1}}
        // exit={{ opacity: 0}}
        // transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}