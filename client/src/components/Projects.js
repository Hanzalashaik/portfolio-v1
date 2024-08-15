import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/asset/projects/100.png"
import projImg2 from "../assets/asset/projects/projectmern.png";
import projImg3 from "../assets/asset/projects/chatapp.png";
import projImg4 from "../assets/asset/projects/todo.png";
import projImg5 from "../assets/asset/projects/onear.png";
import projImg6 from "../assets/asset/projects/quiz.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Projects = () => {
  const projects = [
    {
      title: "100daysofcoding.com",
      description: "Coding platform to practice DSA",
      linktext: "Click to learn more",
      imgUrl: projImg1,
      link: "https://100daysofcoding.com",
    },
    {
      title: "Project Mangt MERN App",
      description: "The platform to manage projects",
      linktext: "Click to learn more",
      imgUrl: projImg2,
      link: "https://github.com/Hanzalashaik/project-management-mern",
    },
    {
      title: "Chatting WebApp",
      description: "Chatting with friends and family",
      linktext: "Click to learn more",
      imgUrl: projImg3,
      link: "https://github.com/Hanzalashaik/Real-Time-Chat-App",
    },
    {
      title: "Todo MERN WebApp",
      description: "The platform to manage your tasks",
      linktext: "Click to learn more",
      imgUrl: projImg4,
      link: "https://github.com/Hanzalashaik/to-do-mern",
    },
    {
      title: "Quiz App",
      description: "The platform to test your knowledge",
      linktext: "Click to learn more",
      imgUrl: projImg6,
      link: "https://github.com/Hanzalashaik/quiz-app",
    },
    {
      title: "OneAR",
      description: "Display your 3D models in AR",
      linktext: "Click to learn more",
      imgUrl: projImg5,
      link: "https://oistream.com",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Portfolio</h2>
                  <p className="main">
                    The following is a collection of my latest and most
                    meaningful projects. Each piece is unique in style and
                    content and represents a distinct moment in my career.
                  </p>
                  
                  <br></br>
                  <Tab.Container id="projects-tabs"  defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row >
                          {projects.map((project, index) => {
                            return <ProjectCard   key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <section className="Resume" id="resume">
                          <div className="container top">
                            <div className="content-section mtop d_flex">
                              <div className="left">
                                <div className="heading">
                                  {/* <h4>2010-Present</h4> */}
                                  <h1>Education</h1>
                                </div>
                              </div>
                              <div>
                                <h2>Bachelor of Engineering</h2>
                                <h5>
                                  Lords Instiute of Engineering and Technology
                                  (2020 - 2024)
                                </h5>

                                <p>CGPA: 8.3/10</p>
                                <hr></hr>
                              </div>
                              <br></br>
                              <br></br>
                              <div>
                                <h2>High School (MPC)</h2>
                                <h5>
                                  Sri Chandra Junior College (2018 - 2020)
                                </h5>
                                <p className="text">
                                  Percentage: 90%<br></br>
                                  <hr></hr>
                                </p>
                              </div>
                              <br></br>
                              <br></br>
                              <div>
                                <h2>Secondary School (SSC)</h2>
                                <h5>Anas Model High School (2012 - 2018)</h5>
                                <hr align="center"></hr>
                                <p className="text">
                                  Grade: Distinction | Activities and societies:
                                  Football team. <br></br>
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="container top">
                          {/* <h4>2020-Present</h4> */}
                          <h1>Work Experience</h1>
                          <div>
                            <br></br>
                            <h2>SDE 1</h2>
                            <h5>OneImmersive Inc- IIIT Hyderabad</h5>
                            <h5>April 2024 – Present</h5>
                            <p className="text">
                              {/* Text */}
                              {/* <ul>
                                <li>
                                  1.
                                </li>
                                <li>
                                  2.
                                </li>
                              </ul> */}
                            </p>
                            <hr align="center"></hr>

                            <br></br>
                          </div>  
                          <div>
                            <br></br>
                            <h2>Web Developer</h2>
                            <h5>Zakrotix - Remote</h5>
                            <h5>May 2023 – July 2023</h5>
                            <hr align="center"></hr>
                            <p className="text">
                              Created and designed a website called 'Ecommerce
                              Site'. Worked both on the front end and backend of
                              the website using programming
                              languages(Stripe(payment),strapi(Headless CMS),
                              javascript, HTML, CSS and React).
                              <ul>
                                <li>
                                  Spearheaded the design of visually appealing
                                  and intuitive web interfaces, utilizing HTML,
                                  CSS, JavaScript,React and Tailwind CSS,
                                  resulting in a 20% improvement in user
                                  engagement.{" "}
                                </li>
                                <li>
                                  Collaborated seamlessly with cross-functional
                                  teams of designers and developers, optimizing
                                  website performance and achieving a 15%
                                  increase in overall site responsiveness.
                                </li>
                                <li>
                                  Led initiatives to exceed project
                                  expectations, resulting in the successful
                                  delivery of 10+ high-performance and
                                  user-centric websites within project
                                  timelines.
                                </li>
                              </ul>
                            </p>
                            <br></br>
                          </div>
                          <div className="heading text-center"></div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="Background"
        src={colorSharp2}
      ></img>
    </section>
  );
};
