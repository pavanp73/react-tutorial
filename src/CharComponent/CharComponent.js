import React from "react";

const charComponent = (props) => {

    const charComponentStyle = {
        display: "inline-block",
        padding: "4px 16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
        cursor: "pointer"
    }

    return (
        <div style={charComponentStyle} onClick={props.click}>
            <p>{props.ch}</p>
        </div>
    )
}

export default charComponent;