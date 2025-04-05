'use client'
import Hero from "@/components/hero/Hero";
import Project from "@/components/project";
import { useEffect, useState } from "react";
import SliderImages from "@/components/sliderImages/SliderImages";
import Contact from "@/components/contact/Contact";
import Preloader from "@/components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import MagneticEffect from "@/common/magnetic";
import Decs from "@/components/descripction/Decs";


const welcomeWords = [
  "स्वागत है",  // Hindi (घर → Welcome)
  "Welcome",    // English (Home → Welcome)
  "Bienvenue",  // French (Maison → Bienvenue)
  "Benvenuto",  // Italian (Casa → Benvenuto)
  "Bem-vindo",  // Portuguese (Lar → Bem-vindo)
  "ようこそ",  // Japanese (家 → ようこそ)
  "Välkommen",  // Swedish (Hem → Välkommen)
  "Willkommen", // German (Zuhause → Willkommen)
  "Welkom"      // Dutch (Thuis → Welkom)
];

const homeWords = [
  "मेरा घर",
  "Home",
  "Maison",
  "Casa",
  "Lar",
  "家",
  "Hem",
  "Zuhause",
  "Thuis"
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState([]) // 🔴 New state added**

  useEffect( () => {
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    // 🔴 Check if first visit or internal navigation**
    if (!sessionStorage.getItem("firstVisit") || isReload) {
        setWord(welcomeWords);
        sessionStorage.setItem("firstVisit", "true");
    } else {
        setWord(homeWords);
    }}, [])

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
        {/* {
          isLoading && <Preloader words={words} />
          
        } */}
          {
          isLoading && <Preloader words={word} /> // 🔴 Pass text as prop**
        }
        </AnimatePresence>
        <Hero />
        <Decs/>
        <Project />
        <SliderImages/>
        <Contact/>
      </main>
    </>
  );
}
