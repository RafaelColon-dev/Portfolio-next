import styles from "../styles/Contact.module.scss";
import Head from "next/head";

import Navbar from "./components/navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Rafael Colon</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Contact</h1>
    </>
  );
}
