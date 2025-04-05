"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import styles from "./stylecontactpage.module.scss";
import Image from "next/image";

const ContactPage = () => {
  const infoRef = useRef(null); // ✅ Using useRef properly

  useEffect(() => {
    const contactInfo = infoRef.current; // ✅ Access element via ref

    if (!contactInfo) return; // ✅ Prevent error if ref isn't attached

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = contactInfo.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / 20;
      const y = (clientY - (top + height / 2)) / 20;

      contactInfo.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    };

    const resetTransform = () => {
      contactInfo.style.transform = "translate(0,0) scale(1)";
    };

    contactInfo.addEventListener("mousemove", handleMouseMove);
    contactInfo.addEventListener("mouseleave", resetTransform);

    return () => {
      contactInfo.removeEventListener("mousemove", handleMouseMove);
      contactInfo.removeEventListener("mouseleave", resetTransform);
    };
  }, []);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", business: "" });
  const [error, setError] = useState({ name: false, email: false, message: false });

  // Floating Label Animation
  const handleFocus = (e) => {
    gsap.to(e.target.nextSibling, { y: -10, scale: 0.9, color: "#FF007F", duration: 0.3 });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      gsap.to(e.target.nextSibling, { y: 0, scale: 1, color: "#aaa", duration: 0.3 });
    }
  };

  // Handle Form Submission Animation
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newError = {
  //     name: !formData.name,
  //     email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
  //     message: !formData.message,
  //   };
  //   setError(newError);

  //   if (Object.values(newError).some((err) => err)) {
  //     gsap.to(formRef.current, { x: -10, repeat: 3, yoyo: true, duration: 0.1 });
  //     return;
  //   }

  //   gsap.to(formRef.current, { opacity: 0, y: -30, duration: 0.5 });
  //   setTimeout(() => {
  //     alert("Message sent successfully!");
  //   }, 600);
  // };
  // Validate all fields on submit
const handleSubmit = (e) => {
  e.preventDefault();
  let newErrors = {};

  if (!formData.name.trim()) newErrors.name = "Name is required";
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }
  if (!formData.message.trim()) newErrors.message = "Message is required";

  setError(newErrors);

  // If no errors, proceed with form submission
  if (Object.keys(newErrors).length === 0) {
    alert("Form submitted successfully!");
  }
};

const handleChange = (field, value) => {
  setFormData((prev) => ({ ...prev, [field]: value }));

  // If the user starts typing in a field, remove ONLY its error
  setError((prev) => ({ ...prev, [field]: "" }));
};
  
  // Validation function for each field
  const validateField = (field, value) => {
    if (value.trim() === "") {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  
    if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Invalid email address";
    }
  
    return ""; // No error if valid
  };

  return (
    <>
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Let's <span>start</span> a project together</h1>
       
        </div>
        <div className={styles.heroImage}>
          <img src="/images/bground.png" alt="Profile" />
        </div>
      </div>

      <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt={"image"}
                                src={`/images/parag.jpeg`}
                            />
                        </div>
                        {/* <h2>Let's <span>work</span> together</h2> */}
                        <h1>Let's <span>start</span> a project together</h1>
                    </span>
      
                </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        {/* Contact Form on Left */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm} noValidate>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, name: value });
          
                // // Remove error if input is valid
                // setError((prev) => ({ ...prev, name: value.trim() === "" ? "Name is required" : "" }));
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={error.name ? styles.errorInput : ""}
              placeholder=" " 
           
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
         required
              />
            <label  className={formData.name ? styles.filledLabel : ""}>What is your name?</label>
            <div style={{ minHeight: "20px" }}>  
            {error.name && <span className={styles.errorMessage}>Name is required</span>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, email: value });
          
                // Remove error if input is valid
                // setError((prev) => ({
                //   ...prev,
                //   email: !/\S+@\S+\.\S+/.test(value) ? "Enter a valid email" : "",
                // }));
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={error.email ? styles.errorInput : ""}
              placeholder=" " 
              required
            />
            <label className={formData.email ? styles.filledLabel : ""}>What is your email?</label>
            <div style={{ minHeight: "20px" }}>  
            {error.name && <span className={styles.errorMessage}>Email is required</span>}
            </div>

          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="text"
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
             
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" " 
            />
            <label>What is your business Name?</label>

          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows="3"
              className={error.message ? styles.errorInput : ""}
              placeholder=" " 
              required
            ></textarea>
            <label>Your message</label>
            <div style={{ minHeight: "20px" }}>  
            {error.name && <span className={styles.errorMessage}>Message is required</span>}
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            <span>Send Message</span>
            <div className={styles.glow}></div>
          </button>
        </form>

        {/* Contact Details on Right */}
        <div ref={infoRef} className={styles.contactInfo}>
          <h2>Get in touch</h2>
          <p>Email: iamparag121298@gmail.com</p>
          <p>Phone: 8397051247</p>
          <p>Location: Gurgaon, India</p>
        </div>
      </div>

      

      
    </div>

    <div className={styles.contact}>
            <div className={styles.info}>
                <div>
                    <span>
                        <h3>Version</h3>
                        <p>2022 © Edition</p>
                    </span>
                    <span>
                        <h3>Time</h3>
                        <p>11:49 PM GMT+2</p>
                    </span>
                </div>
                <div>
                    <span>
                        <h3>Socials</h3>
                        <p>Awwwards</p>
                    </span>
                    <p>Instagram</p>
                    <p>Dribbble</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>

    </>
  );
};

export default ContactPage;
