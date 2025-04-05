'use client'
import { useEffect, useState } from "react";
import Preloader from "@/components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import MagneticEffect from "@/common/magnetic";
import Contact from "@/components/contact/Contact";
import Work from "@/components/work/work";

const words = [
  "मेरा काम" ,
  "Work",          // Hindi (Kaam)
  "Travail",       // French
  "Lavoro",        // Italian
  "Trabalho",      // Portuguese
  "仕事" ,         // Japanese (Shigoto)
  "Arbete",        // Swedish
  "Arbeit",        // German
]

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
       <Work/>
         <Contact/>
      </main>
    </>
  );
}