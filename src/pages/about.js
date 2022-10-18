import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import profilesm from "../assets/profile_sm.png";
import profilecolor from "../assets/profile_sm_color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import useDarkmode from "../hook/useDarkmode";

export default function About({ data }) {
  const about = data.contentfulAbout.aboutMe;
  const myPhoto = data.contentfulAbout.myPhoto;
  const otherThings = data.contentfulAbout.otherThings;
  //   console.log(data, about, myPhoto, otherThings);
  const [colorTheme, setTheme] = useDarkmode();
  const profileColor = localStorage.theme;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="pb-6 font-light">{children}</p>;
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        return <h4 className="py-2 text-lg font-semibold">{children}</h4>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // console.log(node);
        return (
          <img src={node.data.target.url} alt="asset images" className="py-8" />
        );
      },
    },
  };

  return (
    <Layout pageTitle="About Me">
      <section className="flex flex-col-reverse lg:flex-row lg:justify-between items-start mt-8 md:mt-16 lg:mt-40">
        <div className="w-full lg:w-3/4">
          <p className="text-4xl leading-relaxed lg:text-6xl font-sans font-semibold lg:leading-normal">
            {about.aboutMe}
          </p>
        </div>
        <div>
          {profileColor === "light" ? (
            <img
              src={profilecolor}
              alt="profile"
              className="mb-16 lg:absolute lg:right-0 lg:z-0"
            />
          ) : (
            <img
              src={myPhoto.url}
              alt="profile"
              className="mb-16 lg:absolute lg:right-0 lg:z-0"
            />
          )}
        </div>
      </section>

      <section className="pt-32 pb-48">
        <div>
          <img
            src={profilesm}
            alt="profile-sm"
            className="w-40 h-auto mb-12"
          ></img>
        </div>
        <div className="text-2xl lg:text-4xl flex flex-row items-center">
          <h5>Resume</h5>
          <a href="https://yusong.space/" target="_blank" rel="noreferrer">
            <div className="text-lightGrey/50 dark:text-white/50 mx-4 flex items-center">
              <h5>Download</h5>
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
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </section>

      <section>
        <div className="flex flex-row items-end mb-24">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-6xl lg:text-8xl"
          />
          <h5 className="uppercase text-4xl lg:text-6xl font-semibold mx-4">
            Feed
          </h5>
        </div>
        <div className="h-screen bg-slate-400">
          <div></div>
        </div>
        <button className=" my-16 w-full bg-main py-4 text-4xl uppercase font-light text-white rounded-full">
          View work
        </button>
      </section>

      <section className="py-32">
        <h3 className="text-3xl pb-8">Other things I enjoy...</h3>
        <div>{renderRichText(otherThings, options)}</div>
      </section>

      <Footer />
    </Layout>
  );
}

export const Head = () => <title>About Me</title>;

export const aboutQuery = graphql`
  query aboutQuery {
    contentfulAbout {
      myPhoto {
        url
      }
      otherThings {
        raw
      }
      aboutMe {
        aboutMe
      }
    }
  }
`;
