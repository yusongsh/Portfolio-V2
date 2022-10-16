import * as React from "react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const IndexPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-red-400  w-full h-screen flex justify-center items-center">
          <button type="button" disabled>
            <svg
              className="animate-spin w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </button>
          Loading...
        </div>
      ) : (
        <Layout>
          <h1 className="text-red-800">Hello World</h1>
        </Layout>
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
