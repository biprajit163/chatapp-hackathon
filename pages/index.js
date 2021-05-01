import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import { io } from "socket.io-client";


// Components
import Username from './components/username';


export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="../public/favicon.ico"/>
      </Head>
      <body className="app-body">
        <Username/>
      </body>
    </div>
  )
}
