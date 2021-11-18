import React from "react";
import "./Box.css";

const Box = (props) => {
    const { canvasRef, onMouseDown, onMouseUp, onMouseMove, width, height } =
        props;

    return (
        <div className="box">
            <canvas
                ref={canvasRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Box;
