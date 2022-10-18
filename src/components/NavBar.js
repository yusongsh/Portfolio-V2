import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const transition = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const trans = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 1,
  },
};

export default function NavBar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.2,
        }}
      >
        <p>Fading text</p>
      </motion.div>

      <Link to="/about">
        <h1>Navbar</h1>
      </Link>
    </>
  );
}
