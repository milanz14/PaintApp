import React, { useState, useRef, useEffect } from "react";
import Box from "./Box";
import "./CreatePage.css";

const CreatePage = () => {
    const INITIAL_STATE = [
        {
            width: "650px",
            height: "650px",
            radius: 0,
        },
    ];

    const LINE_STATE = {
        lineStyle: "",
        lineWidth: undefined,
    };

    const contextRef = useRef(null);
    const canvasRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const [lineState, setLineState] = useState(LINE_STATE);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // context.scale(2, 2);
        context.lineCap = lineState.lineStyle;
        context.strokeStyle = color;
        context.lineWidth = lineState.lineWidth;

        contextRef.current = context;
    }, [color, lineState.lineStyle, lineState.lineWidth]);

    const startDraw = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const endDraw = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const handleColorPickChange = (e) => {
        // console.log(e.target.value);
        setColor(e.target.value);
    };

    const handleLineChange = (e) => {
        setLineState({
            [e.target.name]: e.target.value,
        });
        // console.log(lineState);
    };

    return (
        <>
            <div className="front">
                <label htmlFor="picker">SELECT COLOR</label>
                <input
                    id="picker"
                    type="color"
                    name="picker"
                    className="picker"
                    onChange={handleColorPickChange}
                ></input>
                <label htmlFor="lineStyle">Line Style</label>
                <select
                    name="lineStyle"
                    id="lineStyle"
                    value={lineState.lineStyle}
                    className="lineStyle"
                    onChange={handleLineChange}
                >
                    <option value="">SELECT</option>
                    <option value="round">Round</option>
                    <option value="square">Square</option>
                </select>
                <label htmlFor="lineWidth">Line Width</label>
                <select
                    name="lineWidth"
                    id="lineWidth"
                    value={lineState.lineWidth}
                    className="lineWidth"
                    onChange={handleLineChange}
                >
                    <option value={1}>1</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>

                <div>
                    <Box
                        className="box"
                        canvasRef={canvasRef}
                        onMouseDown={startDraw}
                        onMouseUp={endDraw}
                        onMouseMove={draw}
                        width={boxes[0].width}
                        height={boxes[0].height}
                    />
                </div>
            </div>
        </>
    );
};

export default CreatePage;
