import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// Design screenshots (replace these with the actual screenshot paths)
import designScreenshot1 from "../../Assets/Projects/designScreenshot1.png";
import designScreenshot2 from "../../Assets/Projects/designScreenshot2.png";
import designScreenshot3 from "../../Assets/Projects/designScreenshot3.png";
import designScreenshot4 from "../../Assets/Projects/designScreenshot4.png";
import designScreenshot5 from "../../Assets/Projects/designScreenshot5.png";
import designScreenshot6 from "../../Assets/Projects/designScreenshot6.png";
import designScreenshot7 from "../../Assets/Projects/designScreenshot7.png";
function Projects() {
  return (      
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Insync Connect"
              description="Our mission is to streamline communication between caregivers, guardians, and staff. This website will be used by Navkshitij, an NGO for mentally challenged individuals, and aims to improve special needs care and make it more accessible."
              demoLink="https://github.com/GargiMittal10/website"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Eventify SIU"
              description="A robust and efficient College Event Management System to efficiently plan and execute events at the college level. Helps in managing budgets, volunteers, participants, faculty coordinators, venues, etc."
              demoLink="https://github.com/garretfernandezz/eventify/tree/master"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ProfileGuard"
              description="With increasing cases of cyberbullying, deepfakes, and identity theft, this project aims to detect whether a social media account is fake or not using machine learning models."
              demoLink="https://github.com/garretfernandezz/Fake-Account-Detection-System"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Design <strong className="purple">Screenshots </strong>
        </h1>

        {/* Design Screenshots Below Projects */}
        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          {/* Screenshot for Project 1 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot1}
              alt="Insync Connect Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>

          {/* Screenshot for Project 2 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot2}
              alt="Eventify SIU Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>

          {/* Screenshot for Project 3 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot3}
              alt="ProfileGuard Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>

          {/* Screenshot for Project 4 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot4}
              alt="Project 4 Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>

          {/* Screenshot for Project 5 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot5}
              alt="Project 5 Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>

          {/* Screenshot for Project 6 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot6}
              alt="Project 6 Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>
          {/* Screenshot for Project 7 */}
          <Col md={4} className="project-screenshot">
            <img
              src={designScreenshot7}
              alt="Project 7 Design Screenshot"
              className="project-screenshot-img"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
