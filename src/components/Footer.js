import React from "react";

export default function Footer() {
  return (
    <>
      <div class="w-full border-b border-gray-300"></div>
      <div className="flex flex-col-reverse md:flex-row justify-between align-top mr-16 mt-32">
        <div className="flex flex-col justify-between md:w-1/2">
          <h2 className="text-6xl leading-normal mb-12 md:mb-0">
            Let's connect digitally
          </h2>
          <p className="mb-4">© 2022 Yusong Shi</p>
        </div>
        <div className="mb-16">
          <ul className="font-semibold text-2xl">
            <li className="mb-4">
              <a
                href="mailto:jackshi.sys@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>
            </li>
            <li className="mb-4">
              {" "}
              <a
                href="https://github.com/yusongsh"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>
            <li className="mb-4">
              {" "}
              <a
                href="https://www.instagram.com/iackyshi/"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </li>
            <li className="mb-4">
              {" "}
              <a
                href="https://dribbble.com/yusongshi"
                target="_blank"
                rel="noreferrer"
              >
                dribbble
              </a>
            </li>
            <li className="mb-4">
              {" "}
              <a
                href="https://www.linkedin.com/in/yusongshi/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
