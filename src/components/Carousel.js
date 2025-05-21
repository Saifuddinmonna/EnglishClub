import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel = () => {
  return (
    <div className="slider">
      <BootstrapCarousel fade>
        <BootstrapCarousel.Item interval={3000}>
          <img
            className="d-block w-100 rounded-4"
            src="images/cover/1carulous.jpg"
            alt="Digital Learning"
          />
          <BootstrapCarousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-4 fw-bold text-white">
              Get Started Digital Learning
            </h1>
            <p className="lead text-white">
              EnglishClub offers online lessons to improve English skills
            </p>
            <button className="btn btn-primary btn-lg w-25 mx-auto">Get Started</button>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item interval={3000}>
          <img
            className="d-block w-100 rounded-4"
            src="images/cover/2carulous.jpg"
            alt="Learning Centers"
          />
          <BootstrapCarousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-4 fw-bold text-white">
              Learn Anywhere, Anytime
            </h1>
            <p className="lead text-white">
              You can learn English by taking face-to-face lessons in our teaching centres or at home via our online courses and learning tools.
            </p>
            <button className="btn btn-primary btn-lg w-25 mx-auto">Get Started</button>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item interval={3000}>
          <img
            className="d-block w-100 rounded-4"
            src="images/cover/4carulous.jpg"
            alt="Professional Coach"
          />
          <BootstrapCarousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-4 fw-bold text-white">
              Expert Guidance
            </h1>
            <p className="lead text-white">
              I am a professional fulltime english coach. I have been teaching English and Spoken more than 12 years.
            </p>
            <button className="btn btn-primary btn-lg w-25 mx-auto">Get Started</button>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel; 

