import React from "react";
import useDarkmode from "../hook/useDarkmode";
import profileLight from "../assets/profile_light.png";
import profileDark from "../assets/profile-dark.png";
import { Modal } from "react-responsive-modal";
import { Link } from "gatsby";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [colorTheme, setTheme] = useDarkmode();
  const [open, setOpen] = useState(false);

  return (
    <div className="py-8 flex flex-row justify-between items-center h-full ">
      <div>
        <Link to="/">
          {colorTheme === "light" ? (
            <img
              src={profileDark}
              alt="profile"
              className="w-14 h-14 shadow-md rounded-full"
            />
          ) : (
            <img
              src={profileLight}
              alt="profile"
              className="w-14 h-14 shadow-md rounded-full"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <div
          onClick={() => setTheme(colorTheme)}
          className="w-12 h-12 flex justify-center items-center cursor-pointer"
        >
          {colorTheme === "light" ? (
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          ) : (
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          )}
        </div>
        <div>
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48"
              height="48"
              className="fill-main/0 stroke-black dark:stroke-white stroke-1.5"
            >
              <title>Menu</title>
              <circle
                cx="12"
                cy="12"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="24"
                cy="12"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="36"
                cy="12"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="36"
                cy="24"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="36"
                cy="36"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="24"
                cy="36"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="12"
                cy="36"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="12"
                cy="24"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="24"
                cy="24"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
            </svg>
          </div>
          <nav
            className={
              open
                ? "bg-navBg fixed left-0 top-0 w-full h-full flex flex-col justify-between p-8 md:px-16 lg:px-24 xl:px-32 z-30 transition ease-in-out duration-500 delay-500"
                : "hidden"
            }
          >
            <div className="py-8 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-8 uppercase font-semibold">
                <Link to="/">
                  {colorTheme === "light" ? (
                    <img
                      src={profileDark}
                      alt="profile"
                      className="w-14 h-14 shadow-md rounded-full"
                    />
                  ) : (
                    <img
                      src={profileLight}
                      alt="profile"
                      className="w-14 h-14 shadow-md rounded-full"
                    />
                  )}
                </Link>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 1.4,
                  }}
                >
                  <p>Yusong Shi</p>
                </motion.div>
              </div>
              <div className="flex flex-row items-center">
                <div
                  onClick={() => setTheme(colorTheme)}
                  className="w-12 h-12 flex justify-center items-center cursor-pointer"
                >
                  {colorTheme === "light" ? (
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
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  ) : (
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
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                  )}
                </div>
                <div onClick={() => setOpen(false)} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48"
                    height="48"
                    className="fill-main/0 stroke-black dark:stroke-white stroke-1.5"
                  >
                    <title>Menu</title>
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="30"
                      cy="18"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="36"
                      cy="12"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="30"
                      cy="30"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="36"
                      cy="36"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="18"
                      cy="30"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="12"
                      cy="36"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="18"
                      cy="18"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="24"
                      cy="24"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
            <motion.div className="pb-16 uppercase text-5xl flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Link to="/projects">Projects</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Link to="/playground">Playground</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{
                  duration: 0.4,
                }}
              >
                {" "}
                <Link to="/about">about</Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  duration: 0.4,
                }}
              >
                {" "}
                <Link to="/photography">photography</Link>
              </motion.span>
              <div className="flex flex-row gap-8 text-lg lowercase ">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <a
                    href="mailto:jackshi.sys@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    email
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <a
                    href="https://github.com/yusongsh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/yusongshi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <a
                    href="https://dribbble.com/yusongshi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dribbble
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </nav>
        </div>
      </div>
    </div>
  );
}
