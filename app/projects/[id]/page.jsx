'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../../components/work/data/project'
import Image from 'next/image'
import styles from './detailstyle.module.scss'
import { AnimatePresence } from 'framer-motion'
import Preloader from '@/components/preloader/Preloader';
import Contact from '@/components/contact/Contact'
import MagneticEffect from "@/common/magnetic";

gsap.registerPlugin(ScrollTrigger)

export default function WorkDetails({ params }) {
  const [id, setId] = useState(null)

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params
      setId(unwrappedParams.id)
    }
    unwrapParams()
  }, [params])

  const project = projects.find((p) => p.id === id) || {
    title: "Project Not Found",
    description: "No project found for this id.",
    images: [],
    videos: [],
  }

  const words = [project.title]
  const galleryRef = useRef(null)
  const titleRef = useRef(null)
  const infoRefs = useRef([])
  const videoRef = useRef(null)
  const parallaxImageRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll')
      new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      })
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  useEffect(() => {
    if (!project || !galleryRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        ease: 'power3.out',
      })

      infoRefs.current.forEach((el, index) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            delay: 0.2 + index * 0.05,
          })
        }
      })

      // Parallax effect for video
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          y: () => -(videoRef.current.offsetHeight * 0.2),
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        })
      }

      // Parallax effect for fourth image
      if (parallaxImageRef.current) {
        gsap.to(parallaxImageRef.current, {
          y: () => -(parallaxImageRef.current.offsetHeight * 0.2),
          ease: "none",
          scrollTrigger: {
            trigger: parallaxImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        })
      }

      // Hover interactions for images
      const galleryItems = galleryRef.current.querySelectorAll(`.${styles.galleryItem}`);
      
      // First image: Expand on hover
      const firstImage = galleryItems[0]?.querySelector('img');
      if (firstImage) {
        galleryItems[0].addEventListener('mouseenter', () => {
          gsap.to(firstImage, { 
            scale: 1.05, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
        galleryItems[0].addEventListener('mouseleave', () => {
          gsap.to(firstImage, { 
            scale: 1, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
      }

      // Second image: Shift up and brighten
      const secondImage = galleryItems[2]?.querySelector('img');
      if (secondImage) {
        galleryItems[2].addEventListener('mouseenter', () => {
          gsap.to(secondImage, { 
            y: -10, 
            filter: 'brightness(1.1)', 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
        galleryItems[2].addEventListener('mouseleave', () => {
          gsap.to(secondImage, { 
            y: 0, 
            filter: 'brightness(1)', 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
      }

      // Third image: Expand horizontally
      const thirdImage = galleryItems[3]?.querySelector('img');
      if (thirdImage) {
        galleryItems[3].addEventListener('mouseenter', () => {
          gsap.to(thirdImage, { 
            scaleX: 1.05, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
        galleryItems[3].addEventListener('mouseleave', () => {
          gsap.to(thirdImage, { 
            scaleX: 1, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
      }

      // Fourth image: Fade and lift
      const fourthImage = galleryItems[4]?.querySelector('img');
      if (fourthImage) {
        galleryItems[4].addEventListener('mouseenter', () => {
          gsap.to(fourthImage, { 
            opacity: 0.9, 
            y: -5, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
        galleryItems[4].addEventListener('mouseleave', () => {
          gsap.to(fourthImage, { 
            opacity: 1, 
            y: 0, 
            duration: 0.3, 
            ease: 'power2.out' 
          })
        })
      }
    })

    return () => ctx.revert()
  }, [project, id])

  if (!project) return <div className={styles.notFound}>Project not found</div>

  return (
    <>
      <MagneticEffect />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={words} />}
      </AnimatePresence>
      <div className={styles.workDetails} data-scroll-container>
        <section className={styles.projectInfo}>
          <h1 ref={titleRef}>{project.title}</h1>
          <div className={styles.infoGrid}>
            <div ref={(el) => (infoRefs.current[0] = el)}>
              <h3>Client</h3>
              <p>{project.client || 'N/A'}</p>
            </div>
            <div ref={(el) => (infoRefs.current[1] = el)}>
              <h3>Year</h3>
              <p>{project.year || 'N/A'}</p>
            </div>
            <div ref={(el) => (infoRefs.current[2] = el)}>
              <h3>Location</h3>
              <p>{project.location || 'N/A'}</p>
            </div>
            <div ref={(el) => (infoRefs.current[3] = el)}>
              <h3>Services</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </section>
        <section className={styles.gallerySection}>
          <div className={styles.galleryGrid} ref={galleryRef}>
            {project.images.length > 0 && (
              <div className={styles.galleryItem} style={{ 
                backgroundColor: 'black',
                padding: '20px'
              }}>
                <div className={styles.liveButton}>
                  <a href={project.liveSiteUrl || '#'} target="_blank" rel="noopener noreferrer">
                    Live Site ↗
                  </a>
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - 1`}
                    fill
                    className={styles.galleryImage}
                    priority
                  />
                </div>
              </div>
            )}

            {project.videos && project.videos.length > 0 ? (
              <div className={styles.galleryItem} style={{ width: '100%' }}>
                <div className={styles.videoContainer}>
                  <video
                    ref={videoRef}
                    src={project.videos[0].src}
                    title={project.videos[0].title}
                    className={styles.galleryVideo}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                </div>
              </div>
            ) : (
              project.images.length > 1 && (
                <div className={styles.galleryItem} style={{ width: '100%' }}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={project.images[1]}
                      alt={`${project.title} - 2`}
                      fill
                      className={styles.galleryImage}
                    />
                  </div>
                </div>
              )
            )}

            {project.images.length > 2 && (
              <div className={styles.galleryItem} style={{ 
               backgroundColor: 'black',
                padding: '20px'
              }}>
                <div className={styles.imgContainer}>
                  <Image
                    src={project.images[2]}
                    alt={`${project.title} - 3`}
                    fill
                    className={styles.galleryImage}
                  />
                </div>
              </div>
            )}

            {project.images.length > 3 && (
              <div className={styles.galleryItem} style={{ width: '100%' }}>
                <div className={styles.imgContainer}>
                  <Image
                    ref={parallaxImageRef}
                    src={project.images[3]}
                    alt={`${project.title} - 4`}
                    fill
                    className={styles.galleryImage}
                  />
                </div>
              </div>
            )}

            {project.images.length > 4 && (
              <div className={styles.galleryItem} style={{ 
                backgroundColor: 'black',
                padding: '20px',
                marginBottom: '350px'
              }}>
                <div className={styles.imgContainer}>
                  <Image
                    src={project.images[4]}
                    alt={`${project.title} - 5`}
                    fill
                    className={styles.galleryImage}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
       
      </div>
      <Contact />
    </>
  )
}
// 'use client'
// import { useRef, useEffect, useState } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { projects } from '../../../components/work/data/project'
// import Image from 'next/image'
// import styles from './detailstyle.module.scss'
// import { AnimatePresence } from 'framer-motion'
// import Preloader from '@/components/preloader/Preloader';
// import Contact from '@/components/contact/Contact'
// import MagneticEffect from "@/common/magnetic";

// gsap.registerPlugin(ScrollTrigger)

// export default function WorkDetails({ params }) {
//   const [id, setId] = useState(null)

//   useEffect(() => {
//     const unwrapParams = async () => {
//       const unwrappedParams = await params
//       setId(unwrappedParams.id)
//     }
//     unwrapParams()
//   }, [params])

//   const project = projects.find((p) => p.id === id) || {
//     title: "Project Not Found",
//     description: "No project found for this id.",
//     images: [],
//     videos: [],
//   }

//   const words = [project.title]
//   const galleryRef = useRef(null)
//   const titleRef = useRef(null)
//   const infoRefs = useRef([])
//   const videoRef = useRef(null)
//   const parallaxImageRef = useRef(null)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     (async () => {
//       const { default: LocomotiveScroll } = await import('locomotive-scroll')
//       new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true,
//       })
//       setTimeout(() => {
//         setIsLoading(false)
//         document.body.style.cursor = 'default'
//         window.scrollTo(0, 0)
//       }, 2000)
//     })()
//   }, [])

//   useEffect(() => {
//     if (!project) return

//     const ctx = gsap.context(() => {
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         ease: 'power3.out',
//       })

//       infoRefs.current.forEach((el, index) => {
//         if (el) {
//           gsap.from(el, {
//             opacity: 0,
//             y: 20,
//             duration: 0.4,
//             delay: 0.2 + index * 0.05,
//           })
//         }
//       })

//       if (videoRef.current) {
//         gsap.to(videoRef.current, {
//           y: () => -(videoRef.current.offsetHeight * 0.2),
//           ease: "none",
//           scrollTrigger: {
//             trigger: videoRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           }
//         })
//       }

//       if (parallaxImageRef.current) {
//         gsap.to(parallaxImageRef.current, {
//           y: () => -(parallaxImageRef.current.offsetHeight * 0.2),
//           ease: "none",
//           scrollTrigger: {
//             trigger: parallaxImageRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           }
//         })
//       }

//       if (galleryRef.current) {
//         const secondImage = galleryRef.current.querySelector(`.${styles.galleryItem}:nth-child(3)`);
//         if (secondImage) {
//           const img = secondImage.querySelector('img');
//           secondImage.addEventListener('mouseenter', () => {
//             gsap.to(img, { 
//               scale: 1.1, 
//               rotation: 2,
//               duration: 0.3, 
//               ease: 'power2.out' 
//             })
//           })
//           secondImage.addEventListener('mouseleave', () => {
//             gsap.to(img, { 
//               scale: 1, 
//               rotation: 0,
//               duration: 0.3, 
//               ease: 'power2.out' 
//             })
//           })
//         }
//       }
//     })

//     return () => ctx.revert()
//   }, [project, id])

//   if (!project) return <div className={styles.notFound}>Project not found</div>

//   return (
//     <>
//       <MagneticEffect />
//       <AnimatePresence mode="wait">
//         {isLoading && <Preloader words={words} />}
//       </AnimatePresence>
//       <div className={styles.workDetails} data-scroll-container>
//         <section className={styles.projectInfo}>
//           <h1 ref={titleRef}>{project.title}</h1>
//           <div className={styles.infoGrid}>
//             <div ref={(el) => (infoRefs.current[0] = el)}>
//               <h3>Client</h3>
//               <p>{project.client || 'N/A'}</p>
//             </div>
//             <div ref={(el) => (infoRefs.current[1] = el)}>
//               <h3>Year</h3>
//               <p>{project.year || 'N/A'}</p>
//             </div>
//             <div ref={(el) => (infoRefs.current[2] = el)}>
//               <h3>Location</h3>
//               <p>{project.location || 'N/A'}</p>
//             </div>
//             <div ref={(el) => (infoRefs.current[3] = el)}>
//               <h3>Services</h3>
//               <p>{project.description}</p>
//             </div>
//           </div>
//         </section>
//         <section className={styles.gallerySection}>
//           <div className={styles.galleryGrid} ref={galleryRef}>
//             {project.images.length > 0 && (
//               <div className={styles.galleryItem} style={{ 
//                 backgroundColor: 'black',
//                 padding: '50px'
//               }}>
//                 <div className={styles.liveButton}>
//                   <a href={project.liveSiteUrl || '#'} target="_blank" rel="noopener noreferrer">
//                     Live Site ↗
//                   </a>
//                 </div>
//                 <div className={styles.imgContainer}>
//                   <Image
//                     src={project.images[0]}
//                     alt={`${project.title} - 1`}
//                     fill
//                     className={styles.galleryImage}
//                     priority
//                   />
//                 </div>
//               </div>
//             )}

//             {project.videos && project.videos.length > 0 ? (
//               <div className={styles.galleryItem} style={{ width: '100%' }}>
//                 <div className={styles.videoContainer}>
//                   <video
//                     ref={videoRef}
//                     src={project.videos[0].src}
//                     title={project.videos[0].title}
//                     className={styles.galleryVideo}
//                     muted
//                     loop
//                     playsInline
//                     autoPlay
//                   />
//                 </div>
//               </div>
//             ) : (
//               project.images.length > 1 && (
//                 <div className={styles.galleryItem} style={{ width: '100%' }}>
//                   <div className={styles.imgContainer}>
//                     <Image
//                       src={project.images[1]}
//                       alt={`${project.title} - 2`}
//                       fill
//                       className={styles.galleryImage}
//                     />
//                   </div>
//                 </div>
//               )
//             )}

//             {project.images.length > 2 && (
//               <div className={styles.galleryItem} style={{ 
//                 backgroundColor: 'black',
//                 padding: '50px'
//               }}>
//                 <div className={styles.imgContainer}>
//                   <Image
//                     src={project.images[2]}
//                     alt={`${project.title} - 3`}
//                     fill
//                     className={styles.galleryImage}
//                   />
//                 </div>
//               </div>
//             )}

//             {project.images.length > 3 && (
//               <div className={styles.galleryItem} style={{ width: '100%' }}>
//                 <div className={styles.imgContainer}>
//                   <Image
//                     ref={parallaxImageRef}
//                     src={project.images[3]}
//                     alt={`${project.title} - 4`}
//                     fill
//                     className={styles.galleryImage}
//                   />
//                 </div>
//               </div>
//             )}

//             {project.images.length > 4 && (
//               <div className={styles.galleryItem} style={{ 
//                 backgroundColor: 'black',
//                 padding: '50px'
//               }}>
//                 <div className={styles.imgContainer}>
//                   <Image
//                     src={project.images[4]}
//                     alt={`${project.title} - 5`}
//                     fill
//                     className={styles.galleryImage}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//       <Contact />
//     </>
//   )
// }