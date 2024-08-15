import { Container, Row, Col } from "react-bootstrap";

// import logo1 from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/asset/github.svg";

export const Footer = () => {
  const date = new Date().getFullYear();
  // console.log(date);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Hanzala Shaikh ❤️👨‍💻</h1>
            <h4>Made with Love</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon1">
              <a
                href="https://www.linkedin.com/in/-hanzala-shaikh-/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/hanzala.jsx/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a
                href="https://www.facebook.com/shaik.hanzala.319/"
                target="_blank"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://github.com/Hanzalashaik"
                
                target="_blank"
              >
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright {date}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
