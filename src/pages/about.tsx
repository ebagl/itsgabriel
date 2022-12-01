import * as React from "react";
import Layout from "../components/layout";

const AboutPage: React.FC = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I'm Gabriel. Just making this page as a placeholder for now.</p>
        </Layout>
    );
};

export const Head: React.FC = () => <title>About Me</title>;
export default AboutPage;