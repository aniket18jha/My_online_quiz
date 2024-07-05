import React from "react";
import "../components_style/about.css";

const About = () => {
  return (
    <div className="container about-body">
      <div className="about-header">About MyQuiz</div>

      {/* cards */}
      <div className="about-content">
        <div className="about-card">
          
          <p className="about-card-text">
            Aniket jha <br /> 
          </p>
        </div>
        <div className="about-description">
          <h3 className="about-subheader">Project Developer</h3>
          <p>
            Hi, I'm Aniket jha, the developer of MyQuiz, a dynamic online
            platform built on the MERN stack.
          </p>
          <p>
            MyQuiz is an innovative solution for educational engagement,
            designed to streamline the process of creating and participating in
            quizzes. The platform features two primary roles: Teacher and
            Student. Teachers can effortlessly create quizzes and generate a
            unique 6-digit code for each quiz. Students join the quiz using this
            code, enabling a seamless and interactive learning experience.
            MyQuiz enhances the teaching process by providing a user-friendly
            interface, ensuring easy quiz creation and participation, and
            facilitating real-time feedback and assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
