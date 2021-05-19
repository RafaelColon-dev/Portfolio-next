import styles from "../styles/Portfolio.module.scss";
import Head from "next/head";
import Image from "next/image";

import Navbar from "./components/navbar";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Rafael Colon</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Portfolio</h1>
    </>
  );
}
