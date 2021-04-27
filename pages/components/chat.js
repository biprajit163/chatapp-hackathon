import React from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import styles from '../../styles/chat.module.css';



function Chat() {
    return(
        <div className={styles.chat}>
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
