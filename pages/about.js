import styles from "../styles/About.module.scss";
import Head from "next/head";
import Image from "next/image";

import Navbar from "./components/navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>Rafael Colon</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>about</h1>
    </>
  );
}
