// import React from 'react';
// import { delay, motion } from "framer-motion";
// import styles from "./stylecurve.module.scss";

// const Curve = () => {
//   const initalPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
//     window.innerHeight / 2
//   } 100 0`;
//   const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
//     window.innerHeight / 2
//   } 100 0`;

//   const pathAnimaction = {
//     initial: {
//       d: initalPath,
//     },
//     enter: {
//       d: targetPath,
//       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
//     },
//     exit: {
//       d: initalPath,
//       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
//     },
//   };
//   return (
//     <svg className={styles.svgCurve}>
//       <motion.path
//         variants={pathAnimaction}
//         initial="initial"
//         animate="enter"
//         exit="exit"
//       ></motion.path>
//     </svg>
//   );
// };

// export default Curve;

import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import styles from "./stylecurve.module.scss";

const Curve = () => {
  const [initialPath, setInitialPath] = useState("");
  const [targetPath, setTargetPath] = useState("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const height = window.innerHeight;
  //     setInitialPath(`M100 0 L100 ${height} Q-100 ${height / 2} 100 0`);
  //     setTargetPath(`M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`); // ✅ Define targetPath
  //   }
  // }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const height = window.innerHeight;
      setInitialPath(`M100 0 L100 ${height} Q-100 ${height / 2} 100 0`);
      setTargetPath(`M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`);
    }
  }, []);

  if (!initialPath || !targetPath) return null; 
  const pathAnimaction = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={pathAnimaction}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
