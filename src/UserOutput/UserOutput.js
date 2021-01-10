import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutput-card">
            <p>Hello, this is react project</p>
            <p>This is a paragraph</p>
            <p>Username: {props.userName}</p>
        </div>
    );
}

export default userOutput;