import React, { useState, useEffect } from 'react';

//The jsxRuntime pragma is necessary to get Emotion and React to work w/ latest Create-React-App version
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react';

import {io} from 'socket.io-client';
const ENDPOINT = 'http://localhost:3001';
const socket = io(ENDPOINT);

function Chat() : JSX.Element {

    const [messages, setMessages] = useState(new Array<string>());
    const [activeMessage, setActiveMessage] = useState("Hello, World!")
    

    useEffect(() => {
        socket.on("message", data => {
            setMessages(messages => [...messages, data]);
        });
      }, []);

    return (
        <div> 
            <form onSubmit={(event) => {
                socket.emit("message", activeMessage)
                event.preventDefault();
                setActiveMessage('');
            }}> 
                <input type='text' value={activeMessage} onChange={(event) => setActiveMessage(event.target.value)} />
                <input type='submit' value='Send'/>
            </form>
            <ul> 
                {messages.map((message, index) => (
                    <li key={index}> {message} </li>
                ))}
            </ul>
        </div>
    );
}
export default Chat;
