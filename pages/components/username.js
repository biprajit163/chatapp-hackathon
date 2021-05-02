import React, { useState, useEffect } from 'react';
import styles from '../../styles/signin.module.css';


function username({ value, onChange, onSubmit, completed }) {

    if(completed) {
        return(
            <div>Chatting as <b>{value}</b></div>
        );
    } else {
        return(
            <div className={styles.signin}>
                <form onSubmit={(e) => e.preventDefault() || onSubmit(value)}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder="enter username..."
                        required
                        onChange={(e) => e.preventDefault() || onChange(e.target.value)}
                    />
                    <button type="submit" className="join-btn">Join Chat</button>
                </form>
            </div>
        );
    }
}

export default username;
