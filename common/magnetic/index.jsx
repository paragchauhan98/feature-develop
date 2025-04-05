

// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";

// const MagneticEffect = () => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".magnetic");

//     elements.forEach((el) => {
//       const strength = 3;

//       const handleMouseMove = (e) => {
//         const { left, top, width, height } = el.getBoundingClientRect();
//         const x = e.clientX - (left + width / 2);
//         const y = e.clientY - (top + height / 2);

//         gsap.to(el, {
//           x: x / strength,
//           y: y / strength,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       };

//       const resetPosition = () => {
//         gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
//       };

//       el.addEventListener("mousemove", handleMouseMove);
//       el.addEventListener("mouseleave", resetPosition);

//       return () => {
//         el.removeEventListener("mousemove", handleMouseMove);
//         el.removeEventListener("mouseleave", resetPosition);
//       };
//     });
//   }, []);

//   return null; // This component only adds effects, no rendering needed.
// };

// export default MagneticEffect;

"use client";
import { useEffect } from "react";
import gsap from "gsap";

const MagneticEffect = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".magnetic");
    const strength = 3;

    const handleMouseMove = (e, el) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      gsap.to(el, {
        x: x / strength,
        y: y / strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetPosition = (el) => {
      gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    };

    // Attach event listeners
    elements.forEach((el) => {
      const onMove = (e) => handleMouseMove(e, el);
      const onLeave = () => resetPosition(el);

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      // Cleanup function
      el.cleanup = () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    });

    // Properly remove event listeners when component unmounts
    return () => {
      elements.forEach((el) => el.cleanup && el.cleanup());
    };
  }, []);

  return null;
};

export default MagneticEffect;
