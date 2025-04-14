'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from './styleheader.module.scss';
import Navbar from "@/components/navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const targertBurger = useRef(null);
 
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(targertBurger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 550,
        onLeave: () => {
          gsap.to(targertBurger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(targertBurger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  
  ];

  const [isMenu, setMenu] = useState(false);
  const pathname = usePathname(); 

  const isWorkPage =  pathname === "/work" ||
  pathname.startsWith("/work/") ||
  pathname.startsWith("/projects/");


  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className={`${styles.header} ${isWorkPage ? styles.workPage : ""}`}>
    
        <div className={`${styles.logo} magnetic`}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.parag}>Parag</p>
            <p className={styles.parag}>Chauhan</p>
          </div>
        </div>
      

      <div className={styles.navContainer}>
      
          <div className={styles.menuName} onClick={toggleMenu}>
            <p>Menu</p>
            <div className={styles.MenuEndicator}></div>
          </div>
        

        <AnimatePresence mode="exit">{isMenu && <Navbar toggleMenu={toggleMenu} isActive = {true} />}</AnimatePresence>

        <div className={`${styles.nav} ${isMenu ? styles.shownav : ""}`}>
          {/* {navItems.map((item) => (
          <div key={item}>
              <div className={`${styles.el} magnetic`}>
                {/* <p>{item}</p> *
                <a href={item.href} className="magnetic">{item.title}</a>
                <div className={styles.endicator}></div>
              </div>
           </div> 
          ))} */}

{navItems.map((item) => (
  <div key={item.href}>  
    <div className={`${styles.el} magnetic`}>
      <a href={item.href} className="magnetic">{item.title}</a>
      <div className={`${styles.endicator} ${isWorkPage ? styles.dot : ""}`}></div>
    </div>
  </div>
))}




        </div>
      </div>

      <div ref={targertBurger} className={styles.headerButtonContainer}>
  {/* Magnetic button wrapper */}
  <button
    onClick={() => setIsActive(!isActive)}
    className={`${styles.button} magnetic ${isActive ? styles.activeButton : ""}`}
  >
    {/* Magnetic burger inside button */}
    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""} magnetic`}></div>
  </button>
</div>

<AnimatePresence mode="exit">
  {isActive && <Navbar toggleMenu={() => setIsActive(false)} />}
</AnimatePresence>
    </div>
  );
};

export default Header;

// 'use client';
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import styles from './styleheader.module.scss';
// import Navbar from "@/components/navbar/Navbar";
// import { AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [isMenu, setMenu] = useState(false);
//   const pathname = usePathname(); 
//   const targertBurger = useRef(null);

//   useLayoutEffect(() => {
//     if (typeof window !== "undefined") { // ✅ Prevent SSR issues
//       gsap.registerPlugin(ScrollTrigger);
//       gsap.to(targertBurger.current, {
//         scrollTrigger: {
//           trigger: document.documentElement,
//           start: 0,
//           end: 550,
//           onLeave: () => {
//             gsap.to(targertBurger.current, { scale: 1, duration: 0.25, ease: "power1.out" });
//           },
//           onEnterBack: () => {
//             gsap.to(targertBurger.current, { scale: 0, duration: 0.25, ease: "power1.out" });
//           },
//         },
//       });
//     }
//   }, []);

//   const navItems = [
//     { title: "Home", href: "/" },
//     { title: "Works", href: "/works" },
//     { title: "Contact", href: "/contact" },
//     { title: "About", href: "/about" },
//   ];

//   const toggleMenu = () => setMenu((prev) => !prev);

//   return (
//     <div className={styles.header}>
//       {/* Logo */}
//       <div className={`${styles.logo} magnetic`}>
//         <p className={styles.copyright}>©</p>
//         <div className={styles.name}>
//           <p className={styles.parag}>Parag</p>
//           <p className={styles.parag}>Chauhan</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className={styles.navContainer}>
//         <div className={styles.menuName} onClick={toggleMenu}>
//           <p>Menu</p>
//           <div className={styles.MenuEndicator}></div>
//         </div>

//         <AnimatePresence mode="wait">
//           {isMenu && <Navbar toggleMenu={toggleMenu} />}
//         </AnimatePresence>

//         <div className={`${styles.nav} ${isMenu ? styles.shownav : ""}`}>
//           {navItems.map((item) => (
//             <div key={item.href} className={`${styles.el} magnetic`}>
//               <a 
//                 href={item.href} 
//                 className={`magnetic ${pathname === item.href ? styles.active : ""}`} // ✅ Highlight active link
//               >
//                 {item.title}
//               </a>
//               {pathname === item.href && <div className={styles.activeDot}></div>} {/* ✅ Add dot */}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animated Burger Button */}
//       <div ref={targertBurger} className={styles.headerButtonContainer}>
//         <button
//           onClick={() => setIsActive(!isActive)}
//           className={`${styles.button} magnetic ${isActive ? styles.activeButton : ""}`}
//         >
//           <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""} magnetic`}></div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

// 'use client';
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import styles from './styleheader.module.scss';
// import Navbar from "@/components/navbar/Navbar";
// import { AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { usePathname } from "next/navigation";
// import Link from "next/link"; // ✅ Ensure we use Next.js Link

// const Header = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [isMenu, setMenu] = useState(false);
//   const pathname = usePathname(); 
//   const targertBurger = useRef(null);

//   console.log("Current Pathname:", pathname); // ✅ Debugging

//   useLayoutEffect(() => {
//     if (typeof window !== "undefined") { // ✅ Prevent SSR issues
//       gsap.registerPlugin(ScrollTrigger);
//       gsap.to(targertBurger.current, {
//         scrollTrigger: {
//           trigger: document.documentElement,
//           start: 0,
//           end: 550,
//           onLeave: () => {
//             gsap.to(targertBurger.current, { scale: 1, duration: 0.25, ease: "power1.out" });
//           },
//           onEnterBack: () => {
//             gsap.to(targertBurger.current, { scale: 0, duration: 0.25, ease: "power1.out" });
//           },
//         },
//       });
//     }
//   }, []);

//   const navItems = [
//     { title: "Home", href: "/" },
//     { title: "Works", href: "/works" },
//     { title: "Contact", href: "/contact" },
//     { title: "About", href: "/about" },
//   ];

//   const toggleMenu = () => setMenu((prev) => !prev);

//   return (
//     <div className={styles.header}>
//       {/* Logo */}
//       <div className={`${styles.logo} magnetic`}>
//         <p className={styles.copyright}>©</p>
//         <div className={styles.name}>
//           <p className={styles.parag}>Parag</p>
//           <p className={styles.parag}>Chauhan</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className={styles.navContainer}>
//         <div className={styles.menuName} onClick={toggleMenu}>
//           <p>Menu</p>
//           <div className={styles.MenuEndicator}></div>
//         </div>

//         <AnimatePresence mode="wait">
//           {isMenu && <Navbar toggleMenu={toggleMenu} />}
//         </AnimatePresence>

//         <div className={`${styles.nav} ${isMenu ? styles.shownav : ""}`}>
//           {navItems.map((item) => (
//             <div key={item.href} className={`${styles.el} magnetic`}>
//               <Link href={item.href} legacyBehavior>
//                 <a className={`magnetic ${pathname === item.href ? styles.active : ""}`}>
//                   {item.title}
//                   {pathname === item.href && <div className={styles.activeDot}></div>} {/* ✅ Dot */}
//                 </a>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animated Burger Button */}
//       <div ref={targertBurger} className={styles.headerButtonContainer}>
//         <button
//           onClick={() => setIsActive(!isActive)}
//           className={`${styles.button} magnetic ${isActive ? styles.activeButton : ""}`}
//         >
//           <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""} magnetic`}></div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

