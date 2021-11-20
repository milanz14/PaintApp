import React, { useState } from "react";
import "../css/LandingPage.css";
import DevBio from "./DevBio";
import milanImg from "../assets/milan_profile.JPG";
import matthewImg from "../assets/matthew_profile.JPG";
import appSS from "../assets/app.png";

const LandingPage = () => {
    const [devInfo, setDevInfo] = useState([
        {
            name: "Milan",
            bio: "Milan is a full-stack software developer based in Toronto. With a decade of experience in Sales, Business Development and a formal education in Mechanical Engineering, Milan was always fascinated with solving problems. In 2019, Milan started down a path of self-study that culminated in completing an intensive, 9-month Software Development bootcamp through Springboard in 2021. Milan is an advocate of life-long learning and is always looking forwards to keeping up with the latest in technology.",
            linkedIn: "https://www.linkedin.com/in/milanzagorac/",
            github: "https://www.github.com/milanz14",
            portfolio: "https://www.milanz.dev",
            img: milanImg,
        },
        {
            name: "Matthew",
            bio: "Matthew is a passionate full-stack developer based in Los Angeles. With a decade of experience in Sales, Business Development and a formal education in Mechanical Engineering, Milan was always fascinated with solving problems. In 2019, Milan started down a path of self-study that culminated in completing an intensive, 9-month Software Development bootcamp through Springboard in 2021. Milan is an advocate of life-long learning and is always looking forwards to keeping up with the latest in technology.",
            linkedIn: "https://www.linkedin.com/in/landen1221/",
            github: "https://github.com/landen1221",
            portfolio: "https://landen1221.github.io/personal-portfolio/",
            img: matthewImg,
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
                <br />
                <section>
                    <img
                        className="app-picture"
                        src={appSS}
                        alt="screen shot of app main page"
                    ></img>
                </section>
                <br />

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
                                img={dev.img}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;
