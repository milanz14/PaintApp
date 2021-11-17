import React from "react";

function Box(props) {
    return (
        <div>
            <div
                style={{
                    height: "500px",
                    width: "500px",
                    border: "5px solid black",
                    backgroundColor: props.color.color || "#000",
                }}
            ></div>
        </div>
    );
}

export default Box;
