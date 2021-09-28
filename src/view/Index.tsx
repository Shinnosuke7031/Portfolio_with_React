import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Products from "./parts/Products/Products";
import Terminal from "./parts/Terminal/Terminal";
import Twitter from "./parts/Twitter/Twitter";
import Layout from "./templates/Layout";

const Routers: FC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout>
        {/* <Terminal /> */}
        <Twitter />
        <Products />
      </Layout>
    </React.Fragment>
  );
};

export default Routers;
