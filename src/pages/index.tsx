import * as React from "react";
import Layout from '../components/layout';

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Howdy, I'm Gabriel">
      <p>This is a work in progress.</p>
      <p>I'm hoping to build this up overtime to be my resume, portfolio, holder-of-interesting-things, (maybe) blog, and whatever else.</p>
    </Layout>
  );
};

export const Head: React.FC = () => <title>Home</title>;

export default IndexPage;