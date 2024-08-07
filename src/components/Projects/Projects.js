import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpg";
import asset from "../../Assets/Projects/asset.jpg";
import Cakery from "../../Assets/Projects/Cakery.png";
import CV from "../../Assets/Projects/CV.png";
import CVCreator from "../../Assets/Projects/CVCreator.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import AWorldOfBook from "../../Assets/Projects/AworldofBook.png";
import TicTacToe from "../../Assets/Projects/TicTacToeGameimage.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={5} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TicTacToe"
              description="As part of my journey to master React, I've created this classic game from scratch. This project has been an incredible learning experience..
Key features of the game:
-> Interactive game board
-> Win detection algorithm
-> Option to Restart(reset) the game
"
              ghLink="https://github.com/Shailja26code/tic-tac-toe"
              demoLink="https://shailja26code.github.io/tic-tac-toe/"
            />
          </Col>

        <Col md={5} className="project-card">
            <ProjectCard
              imgPath={CVCreator}
              isBlog={false}
              title="CVCreator"
              description="The CV Creator is a web application built with JavaScript, HTML, CSS, and React that allows users to create professional-looking curriculum vitae (CVs) easily. The project aims to provide a user-friendly interface for individuals to craft and customize their CVs, streamlining the process of creating and updating their professional profiles."
              ghLink="https://github.com/Shailja26code/CV-Creator"
              demoLink="https://shailja26code.github.io/CV-Creator-Live/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My Portfolio Shailja26code which features some of my github projects as well as my resume and technical skills. This project was built using these technologies like React.js ,Node.js, Express.js, CSS3. This Project is Multi-Page Layout, Styled with React-Bootstrap and Css with easy to customize colors, Fully Responsive."             
              ghLink="https://github.com/Shailja26code/Portfolio"
              demoLink="https://shailja26code.github.io/MyPortfolio/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={AWorldOfBook}
              isBlog={false}
              title="AWorldOfBook"
              description="The World of Books project is an e-commerce website or web application focused on selling books online. It is developed using a combination of HTML for structuring the content, CSS for styling and layout, and JavaScript for adding interactivity and functionality."
              ghLink="https://github.com/karinastrand/aworldofbooks"
              demoLink="https://karinastrand.github.io/aworldofbooks/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Cakery}
              isBlog={false}
              title="Cakery"
              description="At Munamii Cakery, every cake, every box of cupcakes we make has a very special value to us.

              We don't just want to bring a dessert to your table, but rather a unique experience for you, which will become an unforgettable memory. We have been in the pastry market for more than 8 years and now we offer you a new way to buy through our website."
              ghLink="https://github.com/Shailja26code/Cakery-shop"
              demoLink="https://shailja26code.github.io/Cakery-shop/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={CV}
              isBlog={false}
              title="CV"
              description="My personal CV page build with HTML and CSS. It has multiple sections which contains Skills, Experience, Projects I have worked on and Education details."
              ghLink="https://github.com/Shailja26code/CV"
              demoLink="https://shailja26code.github.io/CV/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={asset}
              isBlog={false}
              title="Asset Tracking"
              description="This project is to track your asset details. It can store Computer and Prone details. This can store up to n number of assets based on your choice. Once the Assets are stored in the database, it also gives you option to view and track them in shorting order (by office and then by Purchase date) It also derives the local currency exchange rate for Sweden, Denmark and US. In case of your assets are approaching EOL, it also does colour coding (Red for Assets reaching 3 month to EOP and Yellow for Assets reaching 6 months time)."
              ghLink="https://github.com/Shailja26code/AssetTracking"             
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="This application allows you to create a new task, assign them a title and track via due date and assigned Project. This is a text based application where inputs are being taken from command line. It stores ToDo list details over a file and allows you to view the existing list when application is re-run.

              Key Features: 1- This application has ability to Edit existing ToDo list 2- It helps user to delete unwanted or expired ToDo list 3- It helps user to track the lifecycle of ToDo list and allows to update the status 4- It stores ToDo list details over a file. Therefore, it allows user to view the existing list when application is re-run"
              ghLink="https://github.com/Shailja26code/TodolistFinal"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
