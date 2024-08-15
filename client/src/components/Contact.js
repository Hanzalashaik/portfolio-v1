import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await axios.post(
        "https://portfolio-v1-azure.vercel.app/send-email",
        formDetails
      );
      setButtonText("Sent");
      setStatus({ message: response.data.message, success: true });
      setFormDetails(formInitialDetails);
      console.log(response);

      setTimeout(() => {
        setStatus({});
      }, 2000);
      
    } catch (error) {
      setStatus({ message: "Failed to send email", success: false });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <p>
                    Submit the form below or send me an email at
                    <a href="mailto:shaikhhanzala27@gmail.com">
                      {" "}
                      shaikhhanzala27@gmail.com
                    </a>
                    .
                    <br />
                    You can also reach out to me on social media
                    <a
                      href="https://instagram.com/hanzala.jsx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Hanzala Shaikh
                    </a>
                    .
                  </p>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={formDetails.firstName}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={formDetails.lastName}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          placeholder="Email*"
                          name="email"
                          required
                          value={formDetails.email}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          value={formDetails.message}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        {status.message && (
                          <Col>
                            <p>{status.message}</p>
                          </Col>
                        )}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
