import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ configureBoxes }) => {
    const initialState = {
        width: "",
        height: "",
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form className="boxPickerForm">
            <h5>Add Some Boxes. Fill out the form, submit, color.</h5>
            <div>
                <label htmlFor="boxWidth" id="boxWidth">
                    Width:
                </label>
                <input
                    type="text"
                    name="width"
                    id="width"
                    placeholder="Box Width"
                    value={formData.width}
                    onChange={handleChange}
                ></input>
            </div>
            <button className="picker-button">SET BOXES</button>
        </form>
    );
};

export default NewBoxForm;
