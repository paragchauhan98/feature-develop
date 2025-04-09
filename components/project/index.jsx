// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import styles from "./style.module.scss";
// import Project from "./childProject/Project";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "../../common/roundedbutton";
// const index = () => {
//   const projects = [
//     { 
//       id: "1",
//       title: "The Growth Gen",
//       src: "thegrowthgen.png",
//       color: "#000000",
//     },
//     {
//       id: "2",
//       title: "StientLief Technologies",
//       src: "officestudio.png",
//       color: "#8C8C8C",
//     }
//     // {
//     //   title: "Locomotive",
//     //   src: "locomotive.png",
//     //   color: "#EFE8D3",
//     // },
//     // {
//     //   title: "Silencio",
//     //   src: "silencio.png",
//     //   color: "#706D63",
//     // },
//   ];

//   const scaleAnimation = {
//     initial: { scale: 0, x: "-50%", y: "-50%" },
//     enter: {
//       scale: 1,
//       x: "-50%",
//       y: "-50%",
//       transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//     },
//     closed: {
//       scale: 0,
//       x: "-50%",
//       y: "-50%",
//       transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
//     },
//   };
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const { active, index } = modal;
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   let xMoveContainer = useRef(null);
//   let yMoveContainer = useRef(null);
//   let xMoveCursor = useRef(null);
//   let yMoveCursor = useRef(null);
//   let xMoveCursorLabel = useRef(null);
//   let yMoveCursorLabel = useRef(null);

//   useEffect(() => {
//     //Move Container
//     xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     //Move cursor
//     xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     //Move cursor label
//     xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.45,
//       ease: "power3",
//     });
//     yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.45,
//       ease: "power3",
//     });
//   }, []);

//   const moveItems = (x, y) => {
//     xMoveContainer.current(x);
//     yMoveContainer.current(y);
//     xMoveCursor.current(x);
//     yMoveCursor.current(y);
//     xMoveCursorLabel.current(x);
//     yMoveCursorLabel.current(y);
//   };

//   const manageModal = (active, index, x, y) => {
//     moveItems(x, y);
//     setModal({ active, index });
//   };

//   return (
//     <main
//       className={styles.projects}
//       onMouseMove={(e) => {
//         moveItems(e.clientX, e.clientY);
//       }}
//     >
//       <div className={styles.body}>
//         {projects.map((project, index) => {
//           return (
//             <Project
//               index={index}
//               title={project.title}
//               manageModal={manageModal}
//               key={index}
//             />
//           );
//         })}
//       </div>

//       {/* <Button>
//         <p className=''>More Work</p>
//       </Button> */}

//       <>
//         <motion.div
//           ref={modalContainer}
//           variants={scaleAnimation}
//           initial="initial"
//           animate={active ? "enter" : "closed"}
//           className={styles.modalContainer}
//         >
//           <div
//             style={{ top: index * -100 + "%" }}
//             className={styles.modalSlider}
//           >
//             {projects.map((project, index) => {
//               const { src, color } = project;
//               return (
//                 <div
//                   className={styles.modal}
//                   style={{ backgroundColor: color }}
//                   key={`modal_${index}`}
//                 >
//                   <Image
//                     src={`/images/${src}`}
//                     width={300}
//                     height={0}
//                     alt="image"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>

//         <motion.div
//           ref={cursor}
//           className={styles.cursor}
//           variants={scaleAnimation}
//           initial="initial"
//           animate={active ? "enter" : "closed"}
//         ></motion.div>

//         <motion.div
//           ref={cursorLabel}
//           className={styles.cursorLabel}
//           variants={scaleAnimation}
//           initial="initial"
//           animate={active ? "enter" : "closed"}
//         >
//           {/* <a href="">View</a> */}
//           <Link
//     href={`/projects/${projects[index]?.id || ''}`}
//     className={styles.link}
//     onMouseEnter={(e) => e.stopPropagation()} // Prevent bubbling to cursorLabel
//     onClick={(e) => e.stopPropagation()} // Prevent click from affecting modal
//   >
//     View
//   </Link>
//         </motion.div>
//       </>
//     </main>
//   );
// };

// export default index;



"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Project from "./childProject/Project";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../../common/roundedbutton";

const index = () => {
  const projects = [
    { id: "1", title: "The Growth Gen", src: "thegrowthgen.png", color: "#000000",year: 2024, description: "Design and Development",}
  ];

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
  };

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      className={styles.projects}
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
    >
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project index={index} title={project.title} manageModal={manageModal} key={index} />
        ))}
      </div>

      <div className={styles.persistentModals}>
        {projects.map((project, index) => (
          <>
          <div key={`persistent_${index}`} className={styles.persistentModal} style={{ backgroundColor: project.color }}>
            <Image src={`/images/${project.src}`} width={500} height={500} alt={project.title} />
            
          </div>
          <div className={styles.persistentTitle} key={`title_${index}`}>
            <h3>{project.title}</h3>
           
          </div>
          <hr></hr>

          <div className={styles.persistentInfo} key={`title_${index}`}>
            <p className={styles.persistentInfo1}>{project.description}</p>
            <p className={styles.persistentInfo2}>{project.year}</p>
           
          </div>
          </>
        ))}
      </div>

      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {projects.map((project, index) => (
              <div className={styles.modal} style={{ backgroundColor: project.color }} key={`modal_${index}`}>
                <Image src={`/images/${project.src}`} width={300} height={0} alt="image" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>

        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
          <Link href={`/projects/${projects[index]?.id || ''}`} className={styles.link} onMouseEnter={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>View</Link>
        </motion.div>
      </>
    </main>
  );
};

export default index;
