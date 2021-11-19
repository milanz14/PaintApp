import React from "react";
import "../css/DevBio.css";

const DevBio = (props) => {
    const { name, bio, linkedIn, github, portfolio } = props;

    return (
        <div className="card-group">
            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name.toUpperCase()}</h5>
                    <p class="card-text">{bio}</p>
                    <a href={linkedIn} target="_blank" class="btn me-1">
                        LinkedIn
                    </a>
                    <a href={github} target="_blank" class="btn me-1">
                        GitHub
                    </a>
                    <a href={portfolio} target="_blank" class="btn">
                        Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DevBio;
