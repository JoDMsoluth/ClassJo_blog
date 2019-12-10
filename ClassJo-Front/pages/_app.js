import React from "react";
import Head from "next/head";
import AppLayout from "../components/common/AppLayout";
import { GlobalStyle } from "../statics/styles/global.style";

const ClassJo = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>ClassJo</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        ></link>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default ClassJo;
