import * as React from "react";
import Nav from "./Nav";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div className="p-8 md:p-16 lg:p-24 xl:p-32 dark:bg-main dark:text-white transition duration-500 ">
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
