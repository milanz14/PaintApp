import React, { useState, useRef, useEffect } from "react";
import Box from "./Box";
import "./CreatePage.css";

const CreatePage = () => {
    const INITIAL_STATE = [
        {
            width: "500px",
            height: "500px",
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
    const [canvasData, setCanvasData] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.lineCap = lineState.lineStyle;
        context.strokeStyle = color;
        context.lineWidth = lineState.lineWidth;
        contextRef.current = context;
    }, [color, lineState]);

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

    const handleSaveData = () => {
        const canvas = canvasRef.current;
        const d = canvas.toDataURL("image/png");
        console.log("saved canvas");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="d-flex justify-content-center my-3 input-group input-group-sm px-4">
                        <label htmlFor="color" className="form-label px-4">
                            Line Color
                        </label>
                        <input
                            id="color"
                            type="color"
                            name="color"
                            className="form-control form-control-color px-4"
                            onChange={handleColorPickChange}
                        ></input>
                    </div>
                    <div className="d-flex justify-content-center my-3 input-group input-group-sm px-4">
                        <label htmlFor="lineStyle" className="form-label px-4">
                            Line Style
                        </label>
                        <select
                            name="lineStyle"
                            id="lineStyle"
                            value={lineState.lineStyle}
                            className="form-select"
                            onChange={handleLineChange}
                        >
                            <option value="">SELECT</option>
                            <option value="round">Round</option>
                            <option value="square">Square</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center my-3 px-4">
                        <label htmlFor="lineWidth" className="form-label px-4">
                            Line Width
                        </label>
                        <select
                            name="lineWidth"
                            id="lineWidth"
                            value={lineState.lineWidth}
                            className="form-select"
                            onChange={handleLineChange}
                        >
                            <option value={1}>1</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                </div>
                <div className="front">
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
            <div className="d-flex justify-content-center my-3">
                <button className="btn" onClick={handleSaveData}>
                    <i className="far fa-save"> Save</i>
                </button>
            </div>
        </>
    );
};

export default CreatePage;
