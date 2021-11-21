import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            (C) 2021 - MILAN ZAGORAC AND MATTHEW LANDEN
            <a
                href="https://github.com/milanz14/Paintrest"
                target="_blank"
                rel="noreferrer"
                className="btn me-1"
            >
                <i className="fab fa-github"></i>
            </a>
        </div>
    );
};

export default Footer;
