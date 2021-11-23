import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "./Box";
import "../css/CreatePage.css";
import PaintrestAPI from "../apiHandler";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blankCanvasData from "../blankCanvas.js";
import { isMobile, isBrowser } from "react-device-detect";

const CreatePage = () => {
    const navigate = useNavigate();

    const boxes = {
        width: "600px",
        height: "500px",
        radius: 0,
    };

    const LINE_STATE = {
        lineStyle: "",
        lineWidth: undefined,
    };

    const randomToasts = [
        "Your masterpiece has been added to your gallery",
        "Look at you go!",
        "You are on fire!!!",
        "Another one down!",
        "Is your name Picasso?",
    ];

    const contextRef = useRef(null);
    const canvasRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("");
    const [lineState, setLineState] = useState(LINE_STATE);

    useEffect(() => {
        if (isMobile) {
            return null;
        }
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
        setColor(e.target.value);
    };

    const handleLineChange = (e) => {
        setLineState({
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveData = async () => {
        const validUser = sessionStorage.getItem("_token");
        if (!validUser) {
            toast.error("You must be logged in to save");
            navigate("/login");
        } else {
            const canvas = canvasRef.current;
            const username = sessionStorage.getItem("username") || "Anonymous";
            const d = canvas.toDataURL("image/png");
            if (blankCanvasData === d) {
                toast.warning("No drawing to save");
            } else {
                await PaintrestAPI.addNewImage(d, username);
                const randIdx = Math.floor(Math.random() * randomToasts.length);
                const randomToast = randomToasts[randIdx];
                toast.success(randomToast);
                navigate("/profile");
            }
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const renderContent = () => {
        if (isMobile) {
            return (
                <div>
                    Sorry! This content is not available on mobile devices.
                </div>
            );
        }
        return (
            <>
                <div className="container" style={{ width: boxes.width }}>
                    <div className="row shadow-md p-3 mb-5 bg-body-edited rounded box-color">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex justify-content-center my-3 input-group input-group-sm">
                                <label
                                    htmlFor="lineStyle"
                                    className="form-label px-4"
                                >
                                    Line Style
                                </label>
                                <select
                                    name="lineStyle"
                                    id="lineStyle"
                                    value={lineState.lineStyle}
                                    className="form-select"
                                    onChange={handleLineChange}
                                >
                                    <option value="square">Square</option>
                                    <option value="round">Round</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center input-group input-group-sm my-3 px-4">
                                <label
                                    htmlFor="lineWidth"
                                    className="form-label px-4"
                                >
                                    Line Width
                                </label>
                                <select
                                    name="lineWidth"
                                    id="lineWidth"
                                    value={lineState.lineWidth}
                                    className="form-select"
                                    onChange={handleLineChange}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                    <option value={50}>50</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center my-3 input-group input-group-sm px-4">
                                <label
                                    htmlFor="color"
                                    className="form-label px-4"
                                >
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
                        </div>
                    </div>
                    <div className="container">
                        <Box
                            canvasRef={canvasRef}
                            onMouseDown={startDraw}
                            onMouseUp={endDraw}
                            onMouseMove={draw}
                            width={boxes.width}
                            height={boxes.height}
                        />
                    </div>
                </div>
                <div className=" container d-flex justify-content-center my-3">
                    <button className="btn me-1" onClick={handleSaveData}>
                        <i className="far fa-save"> Save</i>
                    </button>
                    <button className="btn" onClick={clearCanvas}>
                        <i className="far fa-trash-alt"> clear</i>
                    </button>
                </div>
            </>
        );
    };

    return renderContent();
};

export default CreatePage;
