import React from 'react';
import './footer.css';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Aishwary Vishwakarma
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#Experience'>Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href='#contact'>Contact Me</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://twitter.com/AishwaryVishwa3'
          target='_blank'
          rel='noreferrer'
        >
          <BsTwitter />
        </a>
        <a
          href='https://github.com/AishwaryVishwakarma'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/aishwary-vishwakarma-b613601b3/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Aishwary Vishwakarma. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
