import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mypic.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a third year Computer Engineering Student at Symbiosis Institute of Technology
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> HTML, CSS, Javascript, Java, C and DBMS. </b>
              </i>
              <br />
              <br />
              My hobbies include&nbsp;
              <i>
                <b className="purple">reading </b>
                and{" "}
                <b className="purple">travelling.</b>
              </i>
              <br />
              <br />
              Seeking opportunities to apply my technical knowledge to contribute effectively to team success and company goals.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/garretfernandezz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:garret0716@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/garret-fernandez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
