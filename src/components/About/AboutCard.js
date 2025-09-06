import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Garret Fernandez </span>
            from <span className="purple">Pune, India.</span>
            <br /> I am a third-year Computer Engineering student with a passion for creating impactful user experiences.
            <br />
            <br />
            I bring a blend of technical expertise and design creativity to the table, honed through my experience as the 
            <span className="purple"> Media Head </span>
            of the Codex Club, where I led visual and digital content initiatives, continuously honing my design skills. My active involvement in other clubs like TEDx, MUN, and CBC (Cybersecurity and Blockchain Club) has further sharpened my 
            <span className="purple"> collaboration</span>, 
            <span className="purple"> communication</span>, and 
            <span className="purple"> leadership skills</span>.
          </p>
          <p>
            I have hands-on experience with tools like 
            <span className="purple"> Canva</span>, 
            <span className="purple"> Figma</span>, 
            <span className="purple"> Maze</span>, and 
            <span className="purple"> React</span>.
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
