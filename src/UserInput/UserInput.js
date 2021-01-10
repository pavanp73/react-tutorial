import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const inputStyle = {
        border: "1px solid red",
        font: "inherit",
        padding: "4px",
        textAlign: "center"
    }
    return (
        <div>
            <input style={inputStyle} type="text" onChange={props.changed} value={props.userName}/>
        </div>
    )
}

export default userInput;