import "./src/styles/global.css";
import React from "react";
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence initial={true} exitBeforeEnter>
    {element}
  </AnimatePresence>
);
