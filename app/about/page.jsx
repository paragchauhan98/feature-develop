'use client'
import { useEffect, useState } from "react";
import Preloader from "@/components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import MagneticEffect from "@/common/magnetic";
import About from "@/components/about-header/about";
import Contact from "@/components/contact/Contact";

const words = [
    "मेरे बारे में",
    "About",        // English
    "À propos",     // French
    "Informazioni su", // Italian
    "Sobre",        // Portuguese
    "約",          // Japanese (Yaku) or "について" (Ni tsuite)
    "Om",          // Swedish
    "Über",     
  ];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>
     <MagneticEffect />
      <main>
        <AnimatePresence mode="wait">
        {
          isLoading && <Preloader words={words}/>
        }
        </AnimatePresence>
        <About />
         <Contact/>
      </main>
    </>
  );
}