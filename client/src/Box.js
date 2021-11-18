import React from "react";
import "./Box.css";

const Box = (props) => {
    const {
        style,
        canvasRef,
        onMouseDown,
        onMouseUp,
        onMouseMove,
        width,
        height,
    } = props;

    return (
        <canvas
            style={style}
            className="box"
            ref={canvasRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            width={width}
            height={height}
        />
    );
};

export default Box;
