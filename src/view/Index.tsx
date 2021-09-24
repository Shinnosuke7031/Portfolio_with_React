import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Terminal from "./parts/Terminal/Terminal";
import Layout from "./templates/Layout";

const Routers: FC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout>
        <Terminal />
      </Layout>
    </React.Fragment>
  );
};

export default Routers;
