import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Garret Fernandez</h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/garretfernandezz"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:garret0716@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/garret-fernandez/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
