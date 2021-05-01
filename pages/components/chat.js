import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import styles from '../../styles/chat.module.css';


// chat group components
import SingleChat from './chat_groups/singleChat';
import GroupChat from './chat_groups/groupChat';
import NewsChat from './chat_groups/newsChat';


function Chat() {
    const router = useRouter();

    return(
        <div className={styles.chat}>
            <Head>
                <title>Chat App</title>
            </Head>
            <header className={styles.chatHeader}>
                <div className={styles}>
                    <FaUser size={30}/>
                </div>
                <div className={styles}>
                    <HiUserGroup size={40}/>
                </div>
                <div className={styles}>
                    <IoNewspaper size={30}/>
                </div>
            </header>
        </div>
    );
}


export default Chat;
