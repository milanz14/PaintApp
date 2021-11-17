import React, { useState } from "react";
import Box from "./Box";

function Front() {
    const INITIAL_STATE = [{ id: 1, color: "" }];

    const [boxes, setBoxes] = useState(1);
    const [value, setValue] = useState(1);
    const [colors, setColors] = useState(INITIAL_STATE);

    const handleSlider = (e) => {
        console.log(e.target.value);
        setBoxes(e.target.value);
    };

    return (
        <div>
            <input type="color"></input>
            <div>{value}</div>
            {boxes.map((box) => (
                <Box color={colors.color} />
            ))}
            <input
                type="range"
                min="0"
                max="100"
                step="4"
                onChange={handleSlider}
            ></input>
        </div>
    );
}

export default Front;
