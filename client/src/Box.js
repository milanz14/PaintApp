import React, { useRef } from "react";
import "./Box.css";

const Box = (props) => {
    return (
        <canvas
            style={{ borderRadius: `${props.radius}%` }}
            className="box"
            ref={props.canvasRef}
            onMouseDown={props.startDraw}
            onMouseUp={props.endDraw}
            onMouseMove={props.draw}
        />
    );
};

export default Box;
