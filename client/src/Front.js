import React, { useState } from "react";
import Box from "./Box";
import "./Front.css";

function Front() {
    const INITIAL_HEIGHT = 500;
    const INITIAL_WIDTH = 500;
    const INITIAL_STATE = [{ id: 1, color: "" }];

    const [allBoxes, setAllBoxes] = useState(INITIAL_STATE);
    const [numBoxes, setNumBoxes] = useState(INITIAL_STATE.length);
    const [boxHeight, setBoxHeight] = useState(INITIAL_HEIGHT);
    const [boxWidth, setBoxWidth] = useState(INITIAL_WIDTH);
    const [color, setColor] = useState("#fffffff");
    const [boxColor, setBoxColor] = useState("");

    const handleSelect = (e) => {
        console.log(e.target.value);
        // setBoxHeight(INITIAL_HEIGHT / boxes);
        // setBoxWidth(INITIAL_WIDTH / boxes);
        // console.log(
        //     `NUM BOXES: ${boxes}, WIDTH: ${boxWidth}, HEIGHT: ${boxHeight}`
        // );
    };

    const handleColorPickChange = (e) => {
        console.log(e.target.value);
        setColor(e.target.value);
    };

    const handleColorClick = () => {
        // filter boxes by ID and color the one where box.id === id;
        setBoxColor(color);
    };

    return (
        <div className="front">
            <label htmlFor="picker">SELECT COLOR</label>
            <input
                id="picker"
                type="color"
                onChange={handleColorPickChange}
            ></input>
            <Box height={boxHeight} width={boxWidth} color={boxColor} />
            <input
                type="number"
                min="1"
                max="50"
                placeholder="SELECT # BOXES"
                onChange={handleSelect}
                className="box-select"
            ></input>
        </div>
    );
}

export default Front;
