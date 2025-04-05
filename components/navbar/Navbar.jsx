
// "use client"; 
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import styles from "./stylenavbar.module.scss";
// import Links from "./link";
// import { motion } from "framer-motion";
// import { menuSlider } from "./anima";
// import Curve from "./curve/Curve";
// import { usePathname } from "next/navigation"; 

// const menuAnimation = {
//   hidden: { x: "-100%" },
//   visible: { x: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
//   exit: { x: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
// };

// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);
//   const pathname = usePathname();

 
  
  
//   const toggleMenu = () => {
//     setIsActive((prev) => !prev);
//   };



//   // useLayoutEffect(() => {
//   //   debugger

//   //   document.body.classList.toggle("navbar-open", isActive);
//   //   return () => document.body.classList.remove("navbar-open");
//   // }, [isActive]);


//   const navItems = [
//     {
//       title: "Home",
//       href: "/",
//     },
//     {
//       title: "Work",
//       href: "/work",
//     },
//     {
//       title: "Contact",
//       href: "/contact",
//     },
//     {
//       title: "About",
//       href: "/about",
//     },
//   ];
//   return (
//     <div>
//            {/* Overlay */}
//       {/* {isActive && (
//         <motion.div
//           className={styles.overlay}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           onClick={toggleMenu} // Close menu when clicking outside
//         ></motion.div>
//       )} */}
//       {/* < Overlay for Shadow Effect */}
//       {/* <div
//         className={`${styles.overlay} ${isActive ? styles.active : ""}`}
//         onClick={toggleMenu} // Closes menu when clicked
//       ></div>

//       {/* Burger Button *
//       <button className={styles.burgerButton} onClick={toggleMenu}>
//         ☰
//       </button> */}

//       {/* Menu */}
//     <motion.div
//       variants={menuSlider}
//       animate="enter"
//       exit="exit"
//       initial="initial"
//       className={styles.menu}
//     >
//       <div className={styles.body}>
//         <div className={styles.nav}>
//           <div className={styles.header}>
//             <p className={styles.title}>Navigation</p>
//             <button onClick={toggleMenu} className={styles.closeButton}>
//               ×
//             </button>
//           </div>

//           {/* {navItems.map((item, index) => {
//             return <Links key={index} data={{ ...item, index }} />;
//           })} */}
//          {/* {navItems.map((item, index) => (
//   <div key={index} className={`${styles.navItem} magnetic`}>
//     <span className={styles.dot}></span>
//     <a href={item.href} className="magnetic">{item.title}</a>
//   </div>
// ))} */}
// {navItems.map((item, index) => (
//               <div
//                 key={item.href} // ✅ Fix: Use `href` as the unique key
//                 className={`${styles.navItem} magnetic ${pathname === item.href ? styles.active : ""}`}
//               >
//                 <span className={styles.dot} style={{ opacity: pathname === item.href ? 1 : 0 }}></span> {/* 🔥 Highlighted Dot */}
//                 <a href={item.href} className="magnetic">{item.title}</a>
//               </div>
//             ))}
//         </div>
//         {/* <div className={styles.footer}>
//           <a href="/">Awward</a>
//           <a href="/">Instagram</a>
//           <a href="/">Dribble</a>
//           <a href="/">Twitter</a>
//         </div> */}
//       </div>
//       <Curve />
//     </motion.div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import styles from "./stylenavbar.module.scss";
import Links from "./link";
import { motion } from "framer-motion";
import { menuSlider } from "./anima";
import Curve from "./curve/Curve";
import { usePathname } from "next/navigation"; 

const Navbar = ({ toggleMenu }) => {
  const pathname = usePathname();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ];

  return (
    <motion.div
      variants={menuSlider}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p className={styles.title}>Navigation</p>
            <button onClick={toggleMenu} className={styles.closeButton}>
              ×
            </button>
          </div>

          {navItems.map((item) => (
            <div
              key={item.href}
              className={`${styles.navItem} magnetic ${pathname === item.href ? styles.active : ""}`}
            >
              <span className={styles.dot} style={{ opacity: pathname === item.href ? 1 : 0 }}></span>
              <a href={item.href} className="magnetic">{item.title}</a>
            </div>
          ))}
        </div>
        <Curve />
      </div>
    </motion.div>
  );
};

export default Navbar;
