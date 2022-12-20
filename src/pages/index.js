import * as React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Popchew from "../assets/popchew_logo.png";

const IndexPage = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-slate-400  w-full h-screen flex justify-center items-center">
          <button type="button" disabled>
            <svg
              className="animate-spin w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </button>
          Loading...
        </div>
      ) : (
        <div className="p-8 md:px-16 lg:px-24 xl:px-32 pb-10 bg-[url('../assets/stars_black.svg')] dark:bg-main dark:bg-[url('../assets/stars.svg')] dark:text-white transition duration-500 h-full min-h-screen flex flex-col">
          <Nav />
          <div className="flex flex-col justify-center m-auto w-full h-full">
            <div>
              <h1 className="text-5xl font-semibold uppercase leading-relaxed">
                Hey, i’m Yusong Shi
                <br /> I build things for the <span>Web</span>
              </h1>
            </div>
            <div className="mt-6">
              Product Designer & Frontend Developer
              <br /> Currently working at{" "}
              <span
                onMouseEnter={() => setIsImageVisible(true)}
                onMouseLeave={() => setIsImageVisible(false)}
              >
                {isImageVisible ? (
                  <a href="https://popchew.com/" target="_blank" rel="nofollow">
                    <img
                      src={Popchew}
                      alt="Revealed image"
                      className="w-8 h-auto relative inline-block ml-4"
                    />
                  </a>
                ) : (
                  <span className="cursor-pointer underline underline-offset-4">
                    Popchew
                  </span>
                )}
              </span>
            </div>
            <Link to="/about">
              <motion.div
                className="flex flex-row gap-8 mt-12"
                whileHover={{ x: 10 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <motion.p whileHover={{ x: 15 }}>more about me</motion.p>
              </motion.div>
            </Link>
            {/* <Link to="/test">Test</Link> */}
          </div>
        </div>
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
