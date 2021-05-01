import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import { io } from "socket.io-client";


// Components
import Username from './components/username';


export default function Home() {

  const [socket, setSocket] = useState(null);
  const [isUsernameConfirmed, setUsernameConfirmed] = useState(false);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  
  
  const [history, setHistory] = useState([
    {
      username: "Santa Clause",
      message: "Ho ho ho!",
    }
  ]);

  const connectSocket = () => {
    fetch("/api/chat");

    if(!socket) {
      const newSocket = io();

      // handles message
      newSocket.on("message", (msg) => {
        setHistory((history) => [...history, msg]);
      });

      newSocket.on("disconnect", () => {
        console.warn("WARNING: chat app disconnected");
      });

      setSocket(() => newSocket);
    }
  };

  useEffect(() => connectSocket(), []);

  return (
    <div className={styles.Home}>
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className="app-body">
        <Username/>
      </body>
    </div>
  )
}
