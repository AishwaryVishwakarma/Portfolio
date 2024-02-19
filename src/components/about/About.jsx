import React from 'react';
import './about.css';
import ME from '../../assets/black.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { TiPointOfInterest } from 'react-icons/ti';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Profile' className='img-black' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>
                BE in Electronics & Telecommunication Engineering, RV College of
                Engineering, Bangalore
              </small>
            </article>
            <article className='about__card'>
              <TiPointOfInterest className='about__icon' />
              <h5>Interests</h5>
              <small>
                <ul>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Machine Learning</li>
                  <li>Photo Editing</li>
                  <li>Video Editing</li>
                </ul>
              </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
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
            Vishwakarma, recent BE graduate who have a great interest in Web
            development. I am a self taught developer and have a great interest
            in learning new technologies. A very good team player with great
            problem-solving ability and currently sitting in a dark-room with
            coffee and looking into dark-theme VS code.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
