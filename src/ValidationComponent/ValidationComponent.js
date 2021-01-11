import React from 'react';

const validationComponent = (props) => {

    let message = (props.length > 5) ? "Text long enough" : "Text too short";
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default validationComponent;