import React, { useState } from "react";
import "../css/LandingPage.css";
import DevBio from "./DevBio";

const LandingPage = () => {
    const [devInfo, setDevInfo] = useState([
        {
            name: "Milan",
            bio: "Milan is a software developer with a decade of experience in Sales, Business Development and Mechanical Engineering. A formally educated Mechanical Engineer, Milan was alwasys fascinated with solving problems. In 2019, Milan started down a path of self-study that culminated in completing an intensive, 9-month Software Development bootcamp through Springboard. Milan is an advocate of life-long learning and is always looking forwards to keeping up with the latest in technology.",
            linkedIn: "https://www.linkedin.com/in/milanzagorac/",
            github: "https://www.github.com/milanz14",
            portfolio: "https://www.milanz.dev",
        },
        {
            name: "Matthew",
            bio: "Lorem Ipsum",
            linkedIn: "https://www.linkedin.com/in/landen1221/",
            github: "https://github.com/landen1221",
            portfolio: "https://landen1221.github.io/personal-portfolio/",
        },
    ]);

    return (
        <div className="landingPage">
            <div className="container">
                <div className="jumbotron">
                    <p className="lead py-4">
                        Express your inspriation. Save to your profile. Share
                        with others.
                    </p>
                    <a
                        className="btn btn-md me-1"
                        href="/register"
                        role="button"
                    >
                        Register
                    </a>
                    <a className="btn btn-md" href="/login" role="button">
                        Login
                    </a>
                </div>
            </div>

            <div className="container py-4">
                <hr />
                <section>
                    <p>Screenshot of the app goes here</p>
                    <img src="" alt="screen shot of app main page"></img>
                </section>

                <section>
                    <h4>Meet The Developers</h4>
                    <div className="landing-cards">
                        {devInfo.map((dev) => (
                            <DevBio
                                name={dev.name}
                                bio={dev.bio}
                                linkedIn={dev.linkedIn}
                                github={dev.github}
                                portfolio={dev.portfolio}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;
