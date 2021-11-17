import React from "react";

function Box({ height, width, color }) {
    return (
        <div>
            <div
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    border: "2px solid black",
                    backgroundColor: color,
                }}
            ></div>
        </div>
    );
}

export default Box;
