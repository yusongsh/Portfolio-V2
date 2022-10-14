import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import profilesm from "../assets/profile_sm.png";
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
      <section className="flex flex-row justify-between items-start">
        <div className="w-3/4">
          <p className="text-6xl font-sans font-semibold leading-normal">
            {/* {about.aboutMe} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            turpis egestas sed tempus urna et pharetra pharetra massa. Turpis
            egestas pretium aenean pharetra magna ac placerat. Egestas pretium
            aenean pharetra magna ac placerat vestibulum. Vitae nunc sed velit
            dignissim sodales ut eu sem. Pellentesque dignissim enim sit amet.
            Arcu felis bibendum ut tristique et egestas quis ipsum. Enim eu
            turpis egestas pretium aenean pharetra magna ac. Egestas tellus
            rutrum tellus pellentesque eu tincidunt tortor aliquam. Lacus luctus
            accumsan tortor posuere ac ut. Tristique senectus et netus et
            malesuada fames. Tortor posuere ac ut consequat semper viverra nam
            libero. Ultrices mi tempus imperdiet nulla malesuada pellentesque
            elit. Tortor at risus viverra adipiscing at in tellus integer
            feugiat. Arcu non odio euismod lacinia at. Vel orci porta non
            pulvinar neque laoreet suspendisse. Cras adipiscing enim eu turpis
            egestas pretium aenean. Tortor vitae purus faucibus ornare
            suspendisse. Vulputate eu scelerisque felis imperdiet. Eu nisl nunc
            mi ipsum faucibus vitae. Morbi tristique senectus et netus. Viverra
            aliquet eget sit amet tellus cras adipiscing. Ultrices in iaculis
            nunc sed augue lacus. Consectetur lorem donec massa sapien faucibus
            et molestie ac. Senectus et netus et malesuada fames ac turpis
            egestas sed. Non consectetur a erat nam at lectus urna. Velit
            egestas dui id ornare arcu odio ut. Hendrerit dolor magna eget est
            lorem ipsum dolor. Augue interdum velit euismod in pellentesque
            massa placerat duis ultricies. Turpis massa tincidunt dui ut ornare
            lectus. Senectus et netus et malesuada fames ac turpis egestas. Ut
            consequat semper viverra nam libero justo. Dis parturient montes
            nascetur ridiculus mus. Et malesuada fames ac turpis egestas sed
            tempus urna et. Risus ultricies tristique nulla aliquet enim tortor
            at auctor urna. Sed turpis tincidunt id aliquet risus. Massa
            placerat duis ultricies lacus. Ut tristique et egestas quis ipsum.
            Id aliquet risus feugiat in ante. Nibh nisl condimentum id
            venenatis. Mi proin sed libero enim sed. Non odio euismod lacinia at
            quis risus sed vulputate. Nisl tincidunt eget nullam non nisi est
            sit amet. Felis imperdiet proin fermentum leo vel orci porta non
            pulvinar. Augue interdum velit euismod in pellentesque massa
            placerat. Cum sociis natoque penatibus et magnis dis parturient
            montes nascetur. Eget nunc lobortis mattis aliquam faucibus purus.
            Diam donec adipiscing tristique risus nec feugiat. Elementum
            facilisis leo vel fringilla est. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Cras tincidunt lobortis feugiat
            vivamus. At augue eget arcu dictum. Est ullamcorper eget nulla
            facilisi etiam dignissim diam quis enim. Erat nam at lectus urna.
            Massa eget egestas purus viverra accumsan in nisl nisi. Urna
            porttitor rhoncus dolor purus non. Nulla aliquet enim tortor at. Sed
            viverra tellus in hac. Eget nunc lobortis mattis aliquam faucibus
            purus in massa. Risus pretium quam vulputate dignissim suspendisse.
            Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing
            elit. Consectetur adipiscing elit pellentesque habitant morbi
            tristique. Vestibulum lorem sed risus ultricies tristique nulla
            aliquet. Habitasse platea dictumst vestibulum rhoncus est
            pellentesque elit ullamcorper. Amet nisl suscipit adipiscing
            bibendum est ultricies integer. Nulla malesuada pellentesque elit
            eget gravida cum sociis. Sit amet nulla facilisi morbi tempus
            iaculis. Adipiscing commodo elit at imperdiet dui. Sed adipiscing
            diam donec adipiscing tristique risus nec feugiat. Scelerisque felis
            imperdiet proin fermentum leo. Lectus vestibulum mattis ullamcorper
            velit sed ullamcorper morbi. Sit amet dictum sit amet justo donec
            enim diam. Ornare suspendisse sed nisi lacus sed viverra tellus in
            hac. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum
            consequat. Nisl vel pretium lectus quam id leo in vitae turpis. Amet
            purus gravida quis blandit turpis cursus in. Risus nec feugiat in
            fermentum posuere urna nec tincidunt. Mi sit amet mauris commodo
            quis. Egestas maecenas pharetra convallis posuere morbi leo urna
            molestie at. Adipiscing elit pellentesque habitant morbi tristique.
            Et sollicitudin ac orci phasellus egestas tellus rutrum. Nisi quis
            eleifend quam adipiscing. Mauris augue neque gravida in fermentum
            et. Condimentum vitae sapien pellentesque habitant morbi tristique.
            Mauris in aliquam sem fringilla ut morbi. Nulla facilisi cras
            fermentum odio. Pretium fusce id velit ut tortor pretium. Pretium
            aenean pharetra magna ac placerat vestibulum lectus. Urna duis
            convallis convallis tellus id interdum velit laoreet id.
          </p>
        </div>
        <div>
          {/* <img
            src={myPhoto.url}
            alt="profile"
            className="absolute right-0"
          ></img> */}
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
          <FontAwesomeIcon icon={faInstagram} className="text-8xl" />
          <h5 className="uppercase text-6xl font-semibold mx-4">Feed</h5>
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
