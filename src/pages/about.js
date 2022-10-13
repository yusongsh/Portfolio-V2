import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import profilesm from "../assets/profile_sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About({ data }) {
  const about = data.contentfulAbout.aboutMe;
  const myPhoto = data.contentfulAbout.myPhoto;
  const otherThings = data.contentfulAbout.otherThings;
  //   console.log(data, about, myPhoto, otherThings);

  return (
    <Layout pageTitle="About Me">
      <section className="flex flex-row justify-between items-start">
        <div className="w-3/4">
          <p className="text-6xl font-sans font-semibold leading-normal">
            {about.aboutMe}
          </p>
        </div>
        <div>
          <img
            src={myPhoto.url}
            alt="profile"
            className="absolute right-0"
          ></img>
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
        <div className="text-4xl flex flex-row items-center">
          <h5>Resume</h5>
          <a href="https://yusong.space/" target="_blank" rel="noreferrer">
            <div className="text-lightGrey/50 mx-4 flex items-center">
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
