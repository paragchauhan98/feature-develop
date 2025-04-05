import React from 'react';
import Link from "next/link";
import styles from "./stylelink.module.scss";
import { menuSlider, sldier } from "../anima";
import { motion } from "framer-motion";

const index = ({ data }) => {
  return (
    <motion.div
      custom={data.index}
      variants={sldier}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};

export default index;
