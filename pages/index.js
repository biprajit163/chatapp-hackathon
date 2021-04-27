import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// Components
import SignIn from './components/signin';


export default function Home() {
  return (
    <div className={styles.Home}>
      <head className="app-header">
        <title>Chat app</title>
      </head>
      <body className="app-body">
        <SignIn/>
      </body>
    </div>
  )
}
