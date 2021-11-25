import React, { useContext } from 'react';
import '../css/LandingPage.css';
import milanImg from '../assets/milan_profile.JPG';
import matthewImg from '../assets/matthew_profile.JPG';
import laptopSS from '../assets/laptop.png';
import { LoginContext } from '../helper/Context';
import gif from '../assets/ezgif.com-gif-maker.gif';
import nodeSS from '../assets/node.png';
import reactSS from '../assets/React.png';
import postgresSS from '../assets/postgres.png';
import expressSS from '../assets/Express.png';

const LandingPage = () => {
    const devInfo = [
        {
            name: 'Milan Zagorac',
            bio: 'Milan is a full-stack software developer based in Toronto. With a decade of experience in Sales, Business Development and a formal education in Mechanical Engineering, Milan was always fascinated with solving problems. In 2019, Milan started down a path of self-study that culminated in completing an intensive, 9-month Software Development bootcamp through Springboard in 2021. Milan is an advocate of life-long learning and is always looking forwards to keeping up with the latest in technology. Milan is proficient with JavaScript, TypeScript, React, Express, Node, Python, Flask, MongoDB and Postgres.',
            linkedIn: 'https://www.linkedin.com/in/milanzagorac/',
            github: 'https://www.github.com/milanz14',
            portfolio: 'https://www.milanz.dev',
            img: milanImg,
        },
        {
            name: 'Matthew Landen',
            bio: "Passionate full-stack developer based in Los Angeles. Matt has nearly a decade of sales and management experience in a wide arrange of industries, including creating his own tech startup known as MechFinder between 2015-2017. Most recently he's managed $100,000+ LED lighting projects for some of the largest car dealerships in Southern California. He's spent all of his free time over the last 2+ years coding in hopes of making a long-term career transition back into the tech space. This includes completing an intensive, 9-month Software Engineering Bootcamp through Springboard in 2021!",
            linkedIn: 'https://www.linkedin.com/in/landen1221/',
            github: 'https://github.com/landen1221',
            portfolio: 'https://landen1221.github.io/personal-portfolio/',
            img: matthewImg,
        },
    ];

    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    return (
        <div className="LandingPage">
            <div className="container">
                <div className="jumbotron">
                    <p className="h2 my-4">
                        <strong>Paintrest</strong>: Where artists express
                        inspiration
                    </p>
                </div>

                <div className="row mx-auto">
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                        <br />
                        <img
                            className="card-img-top"
                            src={laptopSS}
                            alt="screen shot of app create page"
                        ></img>
                    </div>
                    <div className="col-lg-1 col-md-1"></div>
                </div>
                <div className="my-4">
                    <br />
                    <p className="h2">
                        Show off your modern masterpiece by creating the
                        painting of your dreams and sharing it for all the world
                        to see.
                    </p>
                </div>
            </div>
            <br />
            <div className="container">
                {!loggedIn && (
                    <div className="container">
                        <br />
                        <h4>
                            <strong>READY TO GET STARTED?</strong>
                        </h4>
                        <a
                            className="btn btn-md me-1 my-4"
                            href="/register"
                            role="button"
                        >
                            <i className="fas fa-user-plus"> Register</i>
                        </a>
                        <a className="btn btn-md" href="/login" role="button">
                            <i className="fas fa-sign-in-alt"> Login</i>
                        </a>
                    </div>
                )}
                {loggedIn && (
                    <div className="container">
                        <a className="btn btn-md" href="/profile" role="button">
                            <i className="fas fa-users"> My Profile</i>
                        </a>
                    </div>
                )}
            </div>
            <br />
            <br />
            <br />

            {/* START OF ABOUT THE APP */}
            <div className="container card-radius">
                <div className="row g-1">
                    <div className="col-lg-8 col-md-8 d-flex align-items-stretch mx-auto">
                        <div className="card shadow p-3 mb-5 bg-body rounded card-radius">
                            <h4 className="card-title" id="about-title">
                                <strong>ABOUT THE APP</strong>
                            </h4>
                            <div className="card-body">
                                <p className="card-text about-details">
                                    Simply create an account, click 'Create',
                                    design your masterpiece, and then share it
                                    with the world!
                                </p>
                            </div>
                            <img
                                src={gif}
                                className="card-img-top-card mx-auto gif-image"
                                alt="user flow"
                            />
                            <br />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong>PRIMARY TECHNOLOGIES:</strong>
                                </h5>

                                <div className="container" id="tech-container">
                                    <div className="row ">
                                        <div className="col-lg-6 col-md-6">
                                            <img
                                                src={reactSS}
                                                alt="React logo"
                                                className="tech-logo"
                                            />
                                            <p>React</p>

                                            <img
                                                src={nodeSS}
                                                alt="Node logo"
                                                className="tech-logo"
                                            />
                                            <p>Node</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <img
                                                src={expressSS}
                                                alt="Express logo"
                                                className="tech-logo"
                                            />
                                            <p>Express</p>
                                            <img
                                                src={postgresSS}
                                                alt="Postgres logo"
                                                className="tech-logo"
                                            />
                                            <p>PostgresSQL</p>
                                        </div>
                                    </div>
                                </div>

                                <hr />
                                <p className="card-text" id="smaller-font">
                                    *App utilizes many additional technologies
                                    such as BCRYPT, JSON Web Tokens, React
                                    Router/Context, Axios, Infinite Scrolling,
                                    Robust Error Handling, and more...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* END OF ABOUT */}
            {/* START OF MEET THE DEVELOPERS */}
            <div className="container developers">
                <h2 className="my-5">MEET THE DEVELOPERS</h2>
                <div className="container card-radius">
                    <div className="row g-1">
                        <div className="col-lg-6 col-md-12 d-flex align-items-stretch">
                            <div className="card shadow p-3 mb-5 bg-body rounded card-radius">
                                <img
                                    src={devInfo[0].img}
                                    className="card-img-top-card"
                                    alt="milan profile pic"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <strong>
                                            {devInfo[0].name.toUpperCase()}
                                        </strong>
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
                                    alt="matt profile pic"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <strong>
                                            {' '}
                                            {devInfo[1].name.toUpperCase()}
                                        </strong>
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
        </div>
    );
};

export default LandingPage;
