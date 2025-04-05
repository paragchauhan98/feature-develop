'use client'
import { useEffect, useState } from "react";
import Preloader from "@/components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import MagneticEffect from "@/common/magnetic";
import ContactPage from "@/components/contact-page/contactPage";
import Contact from "@/components/contact/Contact";

const words = [
    "मुझसे संपर्क करें",        // Hindi
    "Contact",      // French
    "Contatto",      // Italian
    "Contato",       // Portuguese
    "連絡" ,        // Japanese (Renraku)
    "Kontakt",       // Swedish
    "Kontakt",       // German
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
        <ContactPage/>
         {/* <Contact/> */}
      </main>
    </>
  );
}