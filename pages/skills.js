import styles from "../styles/Skills.module.scss";
import Head from "next/head";
import Image from "next/image";

import Navbar from "./components/navbar";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Rafael Colon</title>
        <meta name="description" content="My Skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Skills</h1>
    </>
  );
}
