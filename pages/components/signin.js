import React from 'react';
import styles from '../../styles/signin.module.css';
import Chat from './chat';


function signin() {
    return(
        <div className={styles.signin}>
            <form action="/components/chat" method="get">
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="enter username..."
                    required
                />
                <button type="submit" className="join-btn">Join Chat</button>
            </form>
        </div>
    );
}

export default signin;
