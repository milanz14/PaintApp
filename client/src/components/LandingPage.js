import React from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="container">
        <div className="jumbotron">
          <p className="lead py-4">
            Express your creativity by painting on a canvas. Save to your
            profile. Share with your friends.
          </p>
          <hr className="my-4" />
          <a className="btn btn-md me-2" href="#" role="button">
            Login
          </a>
          <a className="btn btn-md" href="#" role="button">
            Register
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
          <h4>The Developers</h4>
          <p>BIO for ML</p>
          <p>BIO for MZ</p>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
