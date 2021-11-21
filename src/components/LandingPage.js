import React from "react";
import "../css/LandingPage.css";
import milanImg from "../assets/milan_profile.JPG";
import matthewImg from "../assets/matthew_profile.JPG";
import appSS from "../assets/app.png";
import Footer from "./Footer";

const LandingPage = () => {
    const devInfo = [
        {
            name: "Milan Zagorac",
            bio: "Milan is a full-stack software developer based in Toronto. With a decade of experience in Sales, Business Development and a formal education in Mechanical Engineering, Milan was always fascinated with solving problems. In 2019, Milan started down a path of self-study that culminated in completing an intensive, 9-month Software Development bootcamp through Springboard in 2021. Milan is an advocate of life-long learning and is always looking forwards to keeping up with the latest in technology. Milan is proficient with JavaScript, TypeScript, React, Express, Node, Python, Flask, MongoDB and Postgres.",
            linkedIn: "https://www.linkedin.com/in/milanzagorac/",
            github: "https://www.github.com/milanz14",
            portfolio: "https://www.milanz.dev",
            img: milanImg,
        },
        {
            name: "Matthew Landen",
            bio: "Passionate full-stack developer based in Los Angeles. Matt has nearly a decade of sales and management experience in a wide arrange of industries, including creating his own tech startup known as MechFinder in 2016. Most recently he's managed $100,000+ LED lighting projects in Southern California. He's spent all of his free time over the last 2+ years coding in hopes of making a long-term career transition back into the tech space.",
            linkedIn: "https://www.linkedin.com/in/landen1221/",
            github: "https://github.com/landen1221",
            portfolio: "https://landen1221.github.io/personal-portfolio/",
            img: matthewImg,
        },
    ];

    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <p className="lead py-4">Express your inspiration.</p>
                </div>
                <div className="my-4">
                    <h3>ABOUT THE APP</h3>
                    <p>
                        This is paintrest, where anyone can show off the next
                        modern masterpiece. Users can create the painting of
                        their dreams on our canvas and share them for all the
                        world to see.
                    </p>
                </div>
                <div className="container py-4 size-window">
                    <br />
                    <div className="row mx-auto">
                        <div className="col-lg-12 col-md-12 col-sm-6 mx-auto">
                            <img
                                className="card-img-top app-picture"
                                src={appSS}
                                alt="screen shot of app main page"
                            ></img>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <div className="container">
                <h4>Ready to get started?</h4>
                <a
                    className="btn btn-md me-1 my-5"
                    href="/register"
                    role="button"
                >
                    <i className="fas fa-user-plus"> Register</i>
                </a>
                <a className="btn btn-md" href="/login" role="button">
                    <i className="fas fa-sign-in-alt"> Login</i>
                </a>
            </div>
            <br />
            <div className="container">
                <h4 className="myy-5">THE DEVELOPERS</h4>
                {/* {devInfo.map((dev) => (
                <div className="container">
                    <div className="row">
                        <DevBio
                            key={dev.name}
                            name={dev.name}
                            bio={dev.bio}
                            linkedIn={dev.linkedIn}
                            github={dev.github}
                            portfolio={dev.portfolio}
                            img={dev.img}
                        />
                    </div>
                </div>
            ))} */}
                <div className="container card-radius">
                    <div className="row g-3">
                        <div className="col-lg-6 col-md-12 d-flex align-items-stretch">
                            <div className="card shadow p-3 mb-5 bg-body rounded card-radius">
                                <img
                                    src={devInfo[0].img}
                                    className="card-img-top-card"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {devInfo[0].name.toUpperCase()}
                                    </h5>
                                    <p className="card-text text-start">
                                        {devInfo[0].bio}
                                    </p>
                                    <a
                                        href={devInfo[0].linkedIn}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn me-1"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                        href={devInfo[0].github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn me-1"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a
                                        href={devInfo[0].portfolio}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        <i className="lni lni-website"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 d-flex align-items-stretch">
                            <div className="card shadow p-3 mb-5 bg-body rounded card-radius">
                                <img
                                    src={devInfo[1].img}
                                    className="card-img-top-card"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {devInfo[1].name.toUpperCase()}
                                    </h5>
                                    <p className="card-text text-start">
                                        {devInfo[1].bio}
                                    </p>
                                    <a
                                        href={devInfo[1].linkedIn}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn me-1"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                        href={devInfo[1].github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn me-1"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a
                                        href={devInfo[1].portfolio}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn"
                                    >
                                        <i className="lni lni-website"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;
