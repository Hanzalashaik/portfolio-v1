import meter6 from "../assets/img/html.png";
import meter7 from "../assets/img/css.png";
import meter9 from "../assets/img/react.png";

import js from "../assets/asset/javascript.png";
import nodejs from "../assets/asset/nodejs.png";
import mongo from "../assets/asset/mongodb.svg";
import aws from "../assets/asset/aws.png";
import azure from "../assets/asset/azure.png";
import linux from "../assets/asset/linux.png";
import tailwind from "../assets/asset/tailwind.png";
import express from "../assets/asset/expressjs.png";
import google from "../assets/asset/google.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import colorSharp from "../assets/img/color-sharp.png";
import docker from "../assets/asset/docker.png";
import kube from "../assets/asset/kube.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Being a lifelong learner is a trait that is really important to
                me, and I know that a good education is not just for the
                schoolyard. Some lessons were learned in the traditional way,
                while others I have received from professional mentors, while
                working and in some cases, friends and family. Read about my
                professional journey and get in touch if you have any questions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} alt="Image2" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image1" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image2" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image2" />
                  <h5>Express Js</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image2" />
                  <h5>Html 5</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image2" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image2" />
                  <h5>React JS</h5>
                </div>

                <div className="item">
                  <img src={google} alt="Image2" />
                  <h5>Google Cloud</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image2" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={azure} alt="Image2" />
                  <h5>Azure Cloud</h5>
                </div>
                <div className="item">
                  <img src={linux} alt="Image2" />
                  <h5>Linux</h5>
                </div>

                <div className="item">
                  <img src={tailwind} alt="Image2" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Image2" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={kube} alt="Image2" />
                  <h5>Kubernetes</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image1" /> */}
    </section>
  );
};
