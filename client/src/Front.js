import React, { useState, useRef, useEffect } from "react";
import NewBoxForm from "./NewBoxForm";
// import Box from "./Box";
import "./Front.css";

const Front = () => {
    const INITIAL_STATE = [
        {
            id: Math.random.toString(),
            width: "250px",
            height: "250px",
            radius: 0,
        },
    ];
    const contextRef = useRef(null);
    const canvasRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = color;
        context.lineWidth = 3;

        contextRef.current = context;
    }, [color]);

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

    const handleSelect = (e) => {
        console.log(e.target.value);
    };

    const handleColorPickChange = (e) => {
        console.log(e.target.value);
        setColor(e.target.value);
    };

    const handleColorClick = () => {
        //filter boxes by ID and set backgroundColor hook property
        // pass this down as a prop;
    };

    return (
        <div className="front">
            <button>Save My Masterpiece</button>
            <NewBoxForm />
            <label htmlFor="picker">SELECT COLOR</label>
            <input
                id="picker"
                type="color"
                onChange={handleColorPickChange}
            ></input>
            {/* {boxes.map((box) => {
                <Box width={box.width} height={box.height} />;
            })} */}
            <div>
                <canvas
                    style={{ borderRadius: `${INITIAL_STATE.radius}%` }}
                    className="box"
                    ref={canvasRef}
                    onMouseDown={startDraw}
                    onMouseUp={endDraw}
                    onMouseMove={draw}
                    width={boxes[0].width}
                    height={boxes[0].height}
                />
            </div>
        </div>
    );
};

export default Front;
