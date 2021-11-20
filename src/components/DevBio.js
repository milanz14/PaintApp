import React from "react";
import "../css/DevBio.css";

const DevBio = (props) => {
    const { name, bio, linkedIn, github, portfolio, img } = props;

    return (
        <div className="card-group shadow-sm p-3 mb-5 bg-body rounded">
            <div className="card control-size">
                <img src={img} className="card-img-top shrunk" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name.toUpperCase()}</h5>
                    <p className="card-text">{bio}</p>
                    <a
                        href={linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="btn me-1"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn me-1"
                    >
                        GitHub
                    </a>
                    <a
                        href={portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DevBio;
