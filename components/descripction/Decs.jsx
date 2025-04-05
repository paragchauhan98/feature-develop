import { color, motion, useInView } from "framer-motion";
import Styles from "./styledesc.module.scss";
import { opacity, sildeUp } from "./anime";
import { useRef } from "react";
import Button from "../../common/roundedbutton";

const Decs = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const param =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  return (
    <div ref={container} className={Styles.dec}>
      <div className={Styles.body}>
        <p>
          {param.split(" ").map((word, index) => {
            return (
              <span key={index} className={Styles.mask}>
                {/* <motion.span
                  variants={sildeUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  custom={index}
                >
                  <p style={{ color: "black",fontSize: "52px" }}>{word}</p>
                </motion.span> */}
                <motion.span variants={sildeUp} initial="initial" animate={isInView ? "open" : "closed"} custom={index}>
  <span style={{ color: "black", fontSize: "38px" }}>{word}</span> {/* ✅ Use <span> instead of <p> */}
</motion.span>
              </span>
            );
          })}
        </p>
        {/* <p> 
  <motion.span> <!-- ✅ Replaced <p> with <span> -->
    <span> <!-- ✅ Replaced nested <p> with <span> -->
      Some text
    </span>
  </motion.span>
</p> */}
<p>
        <motion.span
          variants={sildeUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
        >
         <span style={{ color: "black",fontSize: "16px" }}>
  The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
</span>
        </motion.span>
        </p>
        <div data-scroll data-scroll-speed={0.1}>
        <Button className={`${Styles.button} magnetic`}>
  <a href="/about" className={`${Styles.para}`}>About Me</a>
</Button>
        </div>
      </div>
    </div>
  );
};

export default Decs;
