import React from "react";
import eggImage from "../img/desktop/image-transform.jpg";
import mandarineImage from "../img/desktop/image-photography.jpg";
import fancyBottleImage from "../img/desktop/image-stand-out.jpg";

function ContentSection() {
  return (
    <>
      <div className="content--container">
        <div className="content--container-info">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">Learn more</a>
        </div>
        <img src={eggImage} alt="photo of an egg" />
      </div>
      <div className="content--container">
        <img src={fancyBottleImage} alt="photo of a bottle" />
        <div className="content--container-info">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="content--container">
        <div className="container-with-img-1">
          <div className="overlay-text">
            <h3>Graphic Design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="container-with-img-2">
          <div className="overlay-text">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSection;
