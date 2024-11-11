import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { Analytics } from '@vercel/analytics/react';
import { LayoutGroup } from "framer-motion"

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={` Rushi Chaudhary | ${pageProps.title}`} />
      <LayoutGroup>
      <Component {...pageProps} />
      </LayoutGroup>
      <Analytics />
    </Layout>
  );
}

export default MyApp;
