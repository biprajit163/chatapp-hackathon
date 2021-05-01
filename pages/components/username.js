import React, { useState, useEffect } from 'react';
import styles from '../../styles/signin.module.css';


function username({ value, onChange, onSubmit, completed }) {

    const [username, setUsername] = useState("");

    let handleSubmit = (e) => {
        var frm = document.getElementById("username");

        e.preventDefault();
        console.log(username);
        setUsername("");

        frm.value = "";
    }

    let handleChange = (e) => {
        setUsername(e.target.value);
    }

    if(completed) {
        return(
            <div>Chatting as <b>{value}</b></div>
        );
    } else {
        return(
            <div className={styles.signin}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        placeholder="enter username..."
                        required
                        onChange={handleChange}
                    />
                    <button type="submit" className="join-btn">Join Chat</button>
                </form>
            </div>
        );
    }
}

export default username;
