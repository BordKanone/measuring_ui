import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function ApiGetData() {

    const [messageState, setMessageState] = useState();
  
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/messages/1/';
        axios.get(apiUrl).then(response => {
            setMessageState(response.data)
            console.log(messageState)
        });
    }, []);
    return(
        <div>
            {[...messageState.area.points]}
        </div>
    )
}