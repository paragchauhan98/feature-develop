// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import styles from "./workstyle.module.scss";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Rounded from '../../common/roundedbutton';
// import { FaThLarge, FaList } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import { projects } from "./data/project"; // Import projects

// const filters = ["All", "Branding", "Web Design", "Development"];

// const Work = () => {
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const { active, index } = modal;
//   const modalContainer = useRef(null);
//   const backgroundRef = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [viewMode, setViewMode] = useState("list");

//   const categoryCounts = projects.reduce((acc, project) => {
//     project.category.forEach(cat => {
//       acc[cat] = (acc[cat] || 0) + 1;
//     });
//     acc["All"] = (acc["All"] || 0) + 1;
//     return acc;
//   }, { All: 0 });

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

//   let xMoveContainer = useRef(null);
//   let yMoveContainer = useRef(null);
//   let xMoveBackground = useRef(null);
//   let yMoveBackground = useRef(null);
//   let xMoveCursor = useRef(null);
//   let yMoveCursor = useRef(null);
//   let xMoveCursorLabel = useRef(null);
//   let yMoveCursorLabel = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.fromTo(
//       `.${styles.project}`,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: `.${styles.gridView}`,
//           start: "top 80%",
//         },
//       }
//     );

//     xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
//     yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
//     xMoveBackground.current = gsap.quickTo(backgroundRef.current, "left", { duration: 0.8, ease: "power3" });
//     yMoveBackground.current = gsap.quickTo(backgroundRef.current, "top", { duration: 0.8, ease: "power3" });
//     xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
//     yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
//     xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
//     yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
//   }, []);

//   useEffect(() => {
//     if (activeFilter === "All") {
//       setFilteredProjects(projects);
//     } else {
//       setFilteredProjects(projects.filter((p) => p.category.includes(activeFilter)));
//     }
//   }, [activeFilter]);

//   const moveItems = (x, y) => {
//     xMoveContainer.current(x);
//     yMoveContainer.current(y);
//     xMoveBackground.current(x);
//     yMoveBackground.current(y);
//     xMoveCursor.current(x);
//     yMoveCursor.current(y);
//     xMoveCursorLabel.current(x);
//     yMoveCursorLabel.current(y);
//   };

//   // const manageModal = (active, index, x, y) => {
//   //   moveItems(x, y);
//   //   setModal({ active, index });
//   //   if (active && backgroundRef.current) {
//   //     gsap.set(backgroundRef.current, { backgroundColor: projects[index].color });
//   //   }
//   // };
//   // const manageModal = (active, index, x, y, event) => {
//   //   if (event && event.target.closest(`.${styles.link}`)) {
//   //     return; // Don’t close modal if clicking the link
//   //   }
//   //   moveItems(x, y);
//   //   setModal({ active, index });
//   //   if (active && backgroundRef.current) {
//   //     gsap.set(backgroundRef.current, { backgroundColor: projects[index].color });
//   //   }
//   // };

//   const manageModal = (active, index, x, y, event) => {
//     // Prevent modal from closing if the event target is the link or its container
//     if (!active && event && (event.target.closest(`.${styles.cursorLabel}`) || event.target.closest(`.${styles.link}`))) {
//       return; // Don’t close modal if leaving from the link area
//     }
  
//     // Move items only if active, reset position when inactive
//     if (active) {
//       moveItems(x, y);
//     } else {
//       moveItems(0, 0);
//     }
  
//     // Update modal state
//     setModal({ active, index });
  
//     // Set background color when active
//     if (active && backgroundRef.current) {
//       gsap.set(backgroundRef.current, { backgroundColor: projects[index].color });
//     }
//   };
//   return (
//     <>
//       <div 
//         className={styles.worksPage}
//         onMouseMove={(e) => {
//           if (viewMode === "list") {
//             moveItems(e.clientX, e.clientY);
//           }
//         }}
//       >
//         <motion.div
//           className={styles.hero}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1>Creating next level</h1>
//           <h1><span>digital</span> projects</h1>
//         </motion.div>
//         <div className={styles.body}>
//           <div className={styles.filters}>
//             {filters.map((filter) => (
//               <Rounded onClick={() => setActiveFilter(filter)} key={filter}>
//                 <button
//                   className={activeFilter === filter ? styles.active : ""}
//                 >
//                   {filter} <span className={styles.count}>({categoryCounts[filter] || 0})</span>
//                 </button>
//               </Rounded>
//             ))}
//           </div>
//           {/* <div className={styles.viewToggle}>
//             <Rounded onClick={() => setViewMode("list")}>
//               <FaList
//                 className={viewMode === "list" ? styles.activeView : ""}
//               />
//             </Rounded>
//             <Rounded onClick={() => setViewMode("grid")}>
//               <FaThLarge
//                 className={viewMode === "grid" ? styles.activeView : ""}
//               />
//             </Rounded>
//           </div> */}
//         </div>
//         <AnimatePresence mode="wait">
//           {viewMode === "grid" ? (
//             <motion.div
//               key="gridView"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className={styles.gridView}
//             >
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project.id}
//                   className={styles.project}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <img src={project.src} alt={project.title} />
//                   <h3>{project.title}</h3>
//                   <h3>{project.description}</h3>
//                   <p className={styles.category}>{project.category.join(", ")}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             // <div className={styles.projectList}>
//             //   <table className={styles.projectTable}>
//             //     <thead>
//             //       <tr>
//             //         <th>Title</th>
//             //         <th>Location</th>
//             //         <th>Description</th>
//             //         <th>Year</th>
//             //       </tr>
//             //     </thead>
//             //     <tbody>
//             //       {filteredProjects.map((project, idx) => (
//             //         <motion.tr
//             //           key={project.id}
//             //           className={styles.projectItem}
//             //           onMouseEnter={(e) => manageModal(true, idx, e.clientX, e.clientY, e)}
//             //           onMouseLeave={() => manageModal(false, idx, 0, 0, e)}
//             //           initial={{ opacity: 0, x: -20 }}
//             //           animate={{ opacity: 1, x: 0 }}
//             //           transition={{ duration: 0.5, ease: "easeOut" }}
//             //         >
//             //           <td><span>{project.title}</span></td>
//             //           <td>{project.location || "N/A"}</td>
//             //           <td>{project.description || "N/A"}</td>
//             //           <td>{project.year || "N/A"}</td>
//             //         </motion.tr>
//             //       ))}
//             //     </tbody>
//             //   </table>
//             // </div>
//             <div className={styles.projectList}>
//             <table className={styles.projectTable}>
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Location</th>
//                   <th>Description</th>
//                   <th>Year</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProjects.map((project, idx) => (
//                   <motion.tr
//                     key={project.id}
//                     className={styles.projectItem}
//                     onMouseEnter={(e) => manageModal(true, idx, e.clientX, e.clientY, e)}
//                     onMouseLeave={(e) => manageModal(false, idx, 0, 0, e)}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                   >
//                     <td><span>{project.title}</span></td>
//                     <td>{project.location || "N/A"}</td>
//                     <td>{project.description || "N/A"}</td>
//                     <td>{project.year || "N/A"}</td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           )}
//         </AnimatePresence>

//         {viewMode === "list" && (
//   <>
//     <motion.div
//       ref={backgroundRef}
//       className={styles.background}
//       variants={scaleAnimation}
//       initial="initial"
//       animate={modal.active ? "enter" : "closed"}
//     />
//     <motion.div
//       ref={modalContainer}
//       variants={scaleAnimation}
//       initial="initial"
//       animate={modal.active ? "enter" : "closed"}
//       className={styles.modalContainer}
//     >
//       <div style={{ top: modal.index * -100 + "%" }} className={styles.modalSlider}>
//         {projects.map((project, idx) => (
//           <div className={styles.modal} key={`modal_${idx}`}>
//             <Image
//               src={project.src}
//               width={300}
//               height={200}
//               alt={project.title}
//             />
//           </div>
//         ))}
//       </div>
//     </motion.div>
//     <motion.div
//       ref={cursor}
//       className={styles.cursor}
//       variants={scaleAnimation}
//       initial="initial"
//       animate={modal.active ? "enter" : "closed"}
//     />
//     <motion.div
//       ref={cursorLabel}
//       className={styles.cursorLabel}
//       variants={scaleAnimation}
//       initial="initial"
//       animate={modal.active ? "enter" : "closed"}
//       onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
//     >
//       <Link
//         href={`/projects/${projects[modal.index]?.id || ''}`}
//         className={styles.link}
//         onClick={(e) => e.stopPropagation()} // Ensure click doesn’t close modal prematurely
//       >
//         View
//       </Link>
//     </motion.div>
//   </>
// )}
//       </div>
//     </>
//   );
// };

// export default Work;


"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./workstyle.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from '../../common/roundedbutton';
import { FaThLarge, FaList } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/project"; // Import projects

const filters = ["All", "Branding", "Web Design", "Development"];

const Work = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const modalContainer = useRef(null);
  const backgroundRef = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewMode, setViewMode] = useState("list");
  const hoverRefs = useRef(new Set()); // Track hovered elements

  const categoryCounts = projects.reduce((acc, project) => {
    project.category.forEach(cat => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    acc["All"] = (acc["All"] || 0) + 1;
    return acc;
  }, { All: 0 });

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveBackground = useRef(null);
  let yMoveBackground = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      `.${styles.project}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `.${styles.gridView}`,
          start: "top 80%",
        },
      }
    );

    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    xMoveBackground.current = gsap.quickTo(backgroundRef.current, "left", { duration: 0.8, ease: "power3" });
    yMoveBackground.current = gsap.quickTo(backgroundRef.current, "top", { duration: 0.8, ease: "power3" });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category.includes(activeFilter)));
    }
  }, [activeFilter]);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveBackground.current(x);
    yMoveBackground.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y, elementId) => {
    if (active) {
      hoverRefs.current.add(elementId);
      moveItems(x, y);
      setModal({ active: true, index });
      if (backgroundRef.current) {
        gsap.set(backgroundRef.current, { backgroundColor: projects[index].color });
      }
    } else {
      hoverRefs.current.delete(elementId);
      if (hoverRefs.current.size === 0) {
        moveItems(0, 0);
        setModal({ active: false, index });
      }
    }
  };

  return (
    <>
      <div 
        className={styles.worksPage}
        onMouseMove={(e) => {
          if (viewMode === "list" && modal.active) {
            moveItems(e.clientX, e.clientY); // Keep modal following mouse when active
          }
        }}
      >
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Creating next level</h1>
          <h1><span>digital</span> projects</h1>
        </motion.div>
        <div className={styles.body}>
          <div className={styles.filters}>
            {filters.map((filter) => (
              <Rounded onClick={() => setActiveFilter(filter)} key={filter}>
                <button
                  className={activeFilter === filter ? styles.active : ""}
                >
                  {filter} <span className={styles.count}>({categoryCounts[filter] || 0})</span>
                </button>
              </Rounded>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {viewMode === "list" && (
            <div className={styles.projectList}>
              <table className={styles.projectTable}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, idx) => (
                    <motion.tr
                      key={project.id}
                      className={styles.projectItem}
                      onMouseEnter={(e) => manageModal(true, idx, e.clientX, e.clientY, `row-${idx}`)}
                      onMouseLeave={(e) => manageModal(false, idx, 0, 0, `row-${idx}`)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <td><span>{project.title}</span></td>
                      <td>{project.location || "N/A"}</td>
                      <td>{project.description || "N/A"}</td>
                      <td>{project.year || "N/A"}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

{filteredProjects.map((project, idx) => (
  <motion.div
    key={project.id}
    className={styles.projectItem}
    onMouseEnter={(e) =>
      manageModal(true, idx, e.clientX, e.clientY, `row-${idx}`)
    }
    onMouseLeave={(e) =>
      manageModal(false, idx, 0, 0, `row-${idx}`)
    }
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className={styles.persistentModalAlign}>
      <div
        className={styles.persistentModal}
        style={{ backgroundColor: project.color }}
      >
        <Image
          src={project.src}
          width={800}
          height={900}
          alt={project.title}
        />
      </div>

      <div className={styles.persistentTitle}>
        <h3>{project.title}</h3>
      </div>

      <hr />

      <div className={styles.persistentInfo}>
        <p className={styles.persistentInfo1}>{project.description}</p>
        <p className={styles.persistentInfo2}>{project.year}</p>
      </div>
    </div>
  </motion.div>
))}
        </AnimatePresence>
             
        {/* {viewMode === "list" && (




)} */}
        {viewMode === "list" && (
          <>
            <motion.div
              ref={backgroundRef}
              className={styles.background}
              variants={scaleAnimation}
              initial="initial"
              animate={modal.active ? "enter" : "closed"}
            />
            <motion.div
              ref={modalContainer}
              variants={scaleAnimation}
              initial="initial"
              animate={modal.active ? "enter" : "closed"}
              className={styles.modalContainer}
            >
              <div style={{ top: modal.index * -100 + "%" }} className={styles.modalSlider}>
                {projects.map((project, idx) => (
                  <div className={styles.modal} key={`modal_${idx}`}>
                    <Image
                      src={project.src}
                      width={300}
                      height={200}
                      alt={project.title}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              ref={cursor}
              className={styles.cursor}
              variants={scaleAnimation}
              initial="initial"
              animate={modal.active ? "enter" : "closed"}
              onMouseEnter={() => manageModal(true, modal.index, cursor.current?.offsetLeft || 0, cursor.current?.offsetTop || 0, 'cursor')}
              onMouseLeave={() => manageModal(false, modal.index, 0, 0, 'cursor')}
            />
            <motion.div
              ref={cursorLabel}
              className={styles.cursorLabel}
              variants={scaleAnimation}
              initial="initial"
              animate={modal.active ? "enter" : "closed"}
              onMouseEnter={() => manageModal(true, modal.index, cursorLabel.current?.offsetLeft || 0, cursorLabel.current?.offsetTop || 0, 'cursorLabel')}
              onMouseLeave={() => manageModal(false, modal.index, 0, 0, 'cursorLabel')}
            >
              <Link
                href={`/projects/${projects[modal.index]?.id || ''}`}
                className={styles.link}
                onMouseEnter={(e) => e.stopPropagation()} // Prevent bubbling to cursorLabel
                onClick={(e) => e.stopPropagation()} // Prevent click from affecting modal
              >
                View
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default Work;