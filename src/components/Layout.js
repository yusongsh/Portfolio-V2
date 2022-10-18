import * as React from "react";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div className="p-8 md:px-16 lg:px-24 xl:px-32 dark:bg-main dark:text-white transition duration-500 h-full min-h-screen flex flex-col">
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
