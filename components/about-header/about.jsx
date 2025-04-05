// // // 'use client';
// // // import Image from "next/image";
// // // import Styles from "./styleabout.module.scss";

// // // 'use client';
// // // import Image from "next/image";
// // // import Styles from "./styleabout.module.scss";

// // // const About = () => {
// // //   return (
// // //     <div className={Styles.aboutPage}>
// // //       <div className={Styles.heroSection}>
// // //         <Image src={"/images/sprout.webp"} className={Styles.vid} fill={true} alt="heroBackground" />

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default About;

// // "use client";

// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import styles from "./styleabout.module.scss";

// // export default function AboutPage() {
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     gsap.fromTo(
// //       containerRef.current,
// //       { opacity: 0, y: 50 },
// //       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
// //     );
// //   }, []);

// //   return (
// //     <div className={styles.about} ref={containerRef}>
// //       <section className={styles.hero}>
// //         <h1>About Me</h1>
// //         <p>Creative Developer & Designer</p>
// //       </section>
// //       <section className={styles.content}>
// //         <p>
// //           I am a passionate developer with a love for interactive and visually
// //           compelling digital experiences.
// //         </p>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./styleabout.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
//     gsap.fromTo(aboutRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, scrollTrigger: aboutRef.current });
//     gsap.fromTo(servicesRef.current.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, scrollTrigger: servicesRef.current });
//   }, []);

//   return (
//     <div className={styles.aboutPage}>
//       {/* Hero Section */}
//       <section className={styles.hero} ref={heroRef}>
//         <h1>Your Name</h1>
//         <p>"A powerful quote that defines you."</p>
//       </section>

//       {/* About Section */}
//       <section className={styles.about} ref={aboutRef}>
//         <div className={styles.text}>
//           <h2>About Me</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel purus nec sapien feugiat facilisis.</p>
//         </div>
//         <div className={styles.image}>
//           <img src="/profile.jpg" alt="Your Image" className={styles.fadeInImage} />
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className={styles.services} ref={servicesRef}>
//         <div className={styles.service}>
//           <h3>Web </h3>
//           <p>Creating high-quality websites with modern technologies.</p>
//         </div>
//         <div className={styles.service}>
//           <h3>UI/UX Design</h3>
//           <p>Designing smooth, intuitive user experiences.</p>
//         </div>
//         <div className={styles.service}>
//           <h3>Animation & Interaction</h3>
//           <p>Bringing pages to life with smooth animations.</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./styleabout.module.scss";
import Image from "next/image";

const About = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
   const nameRef = useRef(null);
   const glowRef = useRef(null);
   const arrowRef = useRef(null);
   const secondSectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 }, // ✅ FIXED: Ensuring animation starts from hidden state
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      servicesRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: { trigger: servicesRef.current, start: "left 80%" },
      }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // // Animate Background Movement
    // tl.to(heroRef.current, {
    //   backgroundPosition: "100% 50%",
    //   duration: 6,
    //   ease: "power1.inOut",
    // });

    // // Name Animation on Load
    // gsap.fromTo(
    //   textRef.current,
    //   { opacity: 0, letterSpacing: "10px" },
    //   { opacity: 1, letterSpacing: "2px", duration: 1, ease: "power3.out" }
    // );

    // // Hover Effect for Name & Glow Expansion
    // textRef.current.addEventListener("mouseenter", () => {
    //   gsap.to(textRef.current, {
    //     letterSpacing: "8px",
    //     color: "#F76C6C",
    //     duration: 0.3,
    //   });

    //   gsap.to(glowRef.current, {
    //     scale: 1.5,
    //     opacity: 0.8,
    //     duration: 0.5,
    //     ease: "power2.out",
    //   });
    // });

    // textRef.current.addEventListener("mouseleave", () => {
    //   gsap.to(textRef.current, {
    //     letterSpacing: "2px",
    //     color: "#fff",
    //     duration: 0.3,
    //   });

    //   gsap.to(glowRef.current, {
    //     scale: 1,
    //     opacity: 0.4,
    //     duration: 0.5,
    //     ease: "power2.in",
    //   });
    // });

    // return () => gsap.killTweensOf([textRef.current, glowRef.current]);
    // gsap.fromTo(
    //   nameRef.current,
    //   { y: 50, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    // );
    // const tl = gsap.timeline();

    // // Background Gradient Animation
    // tl.to(heroRef.current, {
    //   backgroundPosition: "100% 50%",
    //   duration: 6,
    //   ease: "power1.inOut",
    //   repeat: -1,
    //   yoyo: true,
    // });

    // // Name Animation
    // gsap.fromTo(
    //   textRef.current,
    //   { opacity: 0, letterSpacing: "10px" },
    //   { opacity: 1, letterSpacing: "2px", duration: 1, ease: "power3.out" }
    // );

    // // Hover Effect
    // textRef.current.addEventListener("mouseenter", () => {
    //   gsap.to(textRef.current, {
    //     letterSpacing: "8px",
    //     color: "#F76C6C",
    //     duration: 0.3,
    //   });
    // });

    // textRef.current.addEventListener("mouseleave", () => {
    //   gsap.to(textRef.current, {
    //     letterSpacing: "2px",
    //     color: "#fff",
    //     duration: 0.3,
    //   });
    // });

    // return () => gsap.killTweensOf(textRef.current);
  
    if (arrowRef.current && secondSectionRef.current) {
      gsap.to(arrowRef.current, {
        rotation: 45, // Rotate 90 degrees
        scrollTrigger: {
          trigger: secondSectionRef.current, // Trigger animation when this section is in view
          start: "top center", // Start when second section reaches center of viewport
          end: "bottom center", // Stop when it leaves
          scrub: 1,
        },
      });
    }
  
  }, []);
  // const handleMouseEnter = () => {
  //   gsap.to(nameRef.current, {
  //     letterSpacing: "8px",
  //     duration: 0.3,
  //     ease: "power2.out",
  //   });
  // };

  // const handleMouseLeave = () => {
  //   gsap.to(nameRef.current, {
  //     letterSpacing: "2px",
  //     duration: 0.3,
  //     ease: "power2.out",
  //   })};

  const handleHover = () => {
    gsap.to(nameRef.current, {
      letterSpacing: "10px",
      color: "ivory", // Pink glow effect
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(glowRef.current, {
      scale: 2.5,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleUnhover = () => {
    gsap.to(nameRef.current, {
      letterSpacing: "2px",
      color: "white",
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(glowRef.current, {
      scale: 1,
      opacity: 0.5,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    // <section className={styles.hero}>
    //   <div className={styles.heroContent}>
    //     <h1
    //       ref={nameRef}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       Parag Chauhan
    //     </h1>
    //     <p className={styles.quote}>
    //       "Designing digital experiences that leave an impact."
    //     </p>
    //   </div>
    // </section>
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      {/* <section className={styles.hero} ref={heroRef}>
        <h1
        ref={nameRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>Your Name</h1>
        <p className={styles.quote}>“Crafting Digital Experiences That Inspire.”</p>
      </section> */}
       {/* <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 ref={textRef}>Your Name</h1>
        <p className={styles.quote}>“Your Inspiring Quote Here”</p>
      </div>
    </section> */}
 <section className={styles.hero}>
      <div className={styles.glowEffect} ref={glowRef}></div>
      <h1
        ref={nameRef}
        className={styles.name}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      >
        Parag Chauhan
      </h1>
      <p className={styles.quote}>Building experiences, not just websites.</p>
    </section>
      {/* About Section */}
      <section className={styles.about} ref={secondSectionRef}>
      <div className={styles.container}>
        <div className={styles.textContent}>
        <svg
        ref={arrowRef} // Attach ref to the arrow
        className={styles.arrow} 
          width="20"
          height="20"
          viewBox="0 0 9 9"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
            fill="black"
          />
        </svg>
          <h2>Not perfect... but always improving.</h2>
          <p>
          I craft unique digital experiences with precision and passion. While my journey is just beginning, my dedication to quality, innovation, and problem-solving ensures that every project I take on is executed with excellence. Ready to transform ideas into reality—one line of code at a time.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/sprout.webp"
            alt="About Me"
            width={500}
            height={500}
            className={styles.img}
          />
        </div>
      </div>
    </section>

      {/* Services Section */}
      {/* <section className={styles.services} ref={servicesRef}>
        <h2>I can help you with</h2>
        <div className={styles.service}>
          <h3>Custom Website Development</h3>
          <p>Build fully custom websites using React, Next.js, or Vue.js.</p>
        </div>
        <div className={styles.service}>
          <h3>Landing Page Development</h3>
          <p>High-converting pages for startups, businesses, and marketing campaigns.</p>
        </div>
        <div className={styles.service}>
          <h3>Portfolio Websites</h3>
          <p>Personal branding websites for designers, freelancers, and professionals.</p>
        </div>
      </section> */}
   <section className={styles.services} ref={servicesRef}>
 
    <div className={styles.headingWrapper}>
      <h2 className={styles.heading}>I can help you with...</h2>
    </div>
    <div className={styles.container}>
    <div className={styles.serviceContainer}>
      <div className={styles.service}>
        <p className={styles.sub}>01</p>
        <hr />
        <h3>Custom Website </h3>
        <p> Need a unique and high-performance website? I build fully customized websites using modern frameworks like React, Next.js, and Vue.js to ensure speed, responsiveness, and seamless user experience.</p>
      </div>
      <div className={styles.service}>
      <p className={styles.sub}>02</p>
      <hr />
        <h3>Landing Page </h3>
        <p>A great first impression matters. I design and develop high-converting landing pages tailored for startups, businesses, and marketing campaigns—optimized for speed and SEO.
        </p>
      </div>
      <div className={styles.service}>
      <p className={styles.sub}>03</p>
      <hr />
        <h3>Portfolio Websites</h3>
        <p>Showcasing your work should be effortless and stylish. I create sleek, modern, and fast-loading portfolio websites that highlight your skills and projects in the best way possible.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
