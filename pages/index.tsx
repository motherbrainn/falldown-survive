import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Ball from "../components/Ball";
import Block from "../components/Block";
import BlockContainer from "../components/BlockContainer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const key = useRef(0);
  const [blocks, setBlocks] = useState([
    <Block key={key.current} id={key.current} />,
  ]);

  const test = useCallback(() => {
    setInterval(() => {
      setBlocks((prevState) => {
        if (prevState.length > 9) {
          prevState.shift();
        }
        key.current += 1;
        return [...prevState, <Block key={key.current} id={key.current} />];
      });
    }, 1000);
  }, []);

  useEffect(() => {
    test();
  }, [test]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Ball />
        <BlockContainer blocks={blocks} />
      </main>
    </div>
  );
};

export default Home;
