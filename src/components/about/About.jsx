import React from "react";
import "./about.css";
import ME from "../../assets/black.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {TiPointOfInterest} from "react-icons/ti"
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" className="img-black" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>
                3rd Year BE Student, RV College Of Engineering, Bangalore
              </small>
            </article>
            <article className="about__card">
              <TiPointOfInterest className="about__icon" />
              <h5>Interests</h5>
              <small>
                <ul>
                  <li>Web Development</li>
                  <li>WEB3</li>
                  <li>Mobile App Development</li>
                  <li>Machine Learning</li>
                </ul>
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Hobbies</h5>
              <small>
                <ul>
                  <li>Music</li>
                  <li>Books</li>
                  <li>Travelling</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Hello there! Welcome to my portfolio. <br /> I am Aishwary
            Vishwakarma, a 3rd year BE student who have a great interest in Web
            development and Machine Learning. I am a self taught developer and
            have a great interest in learning new technologies. I am a very good
            team player with great problem-solving ability. Recenty I won
            OnCampus <b>HULT Prize Championship</b> and currently working with a
            3-man team to change the idea into reality.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
