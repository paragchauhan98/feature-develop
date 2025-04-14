// import styles from './stylefooter.module.scss';
// import Image from 'next/image';
// import Rounded from '../../common/roundedbutton';
// import { useRef } from 'react';
// import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
// import Magnetic from '../../common/magnetic';

// export default function Contact() {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ["start end", "end end"]
//     })
//     const x = useTransform(scrollYProgress, [0, 1], [0, 100])
//     const y = useTransform(scrollYProgress, [0, 1], [-300, 0])
//     const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
//     return (
//         <motion.div style={{y}} ref={container} className={styles.contact}>
//             <div className={styles.body}>
//                 <div className={styles.title}>
//                     <span>
//                         <div className={styles.imageContainer}>
//                             <Image 
//                             fill={true}
//                             alt={"image"}
//                             src={`/images/parag.jpeg`}
//                             />
//                         </div>
//                         <h2>Let's <span>work</span></h2>
//                     </span>
//                     <h2>together</h2>
//                     <motion.div style={{x}} className={styles.buttonContainer}>
//                         <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
//                             <p>Get in touch</p>
//                         </Rounded>
//                     </motion.div>
//                     <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
//                     </motion.svg>
//                 </div>
//                 <div className={styles.nav}>
//                         <Rounded>
//                             <p><a href="mailto:someone@example.com">iamparag121298@gmail.com</a></p>
//                         </Rounded>
//                         <Rounded>
//                             <p>+31 6 27 84 74 30</p>
//                         </Rounded>
//                 </div>
//                 <div className={styles.info}>
//                     <div>
//                         <span>
//                             <h3>Version</h3>
//                             <p>2025 © Edition</p>
//                         </span>
//                     </div>
//                     <div>
//                         <span>
//                             <h3>socials</h3>
                            
//                                 <p className={`magnetic`}>Awwwards</p>
                           
//                         </span>
                        
//                             <p className='magnetic'>Instagram</p>
                       
                        
//                             <p className='magnetic'>Dribbble</p>
                       
                        
//                             <p className='magnetic'>Linkedin</p>
                       
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     )
// }

import styles from './stylefooter.module.scss';
import Image from 'next/image';
import Rounded from '../../common/roundedbutton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/magnetic';
import Curve from '../navbar/curve/Curve'; // ✅ Import Curve Component

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    const item = 
        // {
        //   title: "Home",
        //   href: "/",
        // },
        // {
        //   title: "Work",
        //   href: "/work",
        // },
        {
        //   title: "Contact",
          href: "/contact",
        }
        // {
        //   title: "About",
        //   href: "/about",
        // },
      
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt={"image"}
                                src={`/images/bground.png`}
                            />
                        </div>
                        <h2>Let's <span>work</span> together</h2>
                    </span>
                    {/* <h2>together</h2> */}
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <a href={item.href}>Get in touch</a>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p><a href="mailto:iamparag121298@gmail.com">iamparag121298@gmail.com</a></p>
                    </Rounded>
                    <Rounded >
                        <p >+91&nbsp;8397051247</p>
                    </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2025 © Edition</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>Socials</h3>
                            <a href="/#" className='magnetic'>Instagram</a>
                        </span>
                        
                        <a href="https://www.linkedin.com/in/parag-singh-427764179/" className='magnetic'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <Curve />  {/* ✅ Added Curve Animation Here */}
        </motion.div>
    )
}
