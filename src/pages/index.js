import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-red-800">Hello World</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
