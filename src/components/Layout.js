import * as React from "react";
import { Link } from "gatsby";
import Nav from "./Nav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="p-24 dark:bg-main dark:text-white transition duration-500 ">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
