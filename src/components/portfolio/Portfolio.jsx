import React from 'react';
import Netflix from '../../assets/Netflix-Clone.png';
import Fundamentals from '../../assets/Fundamentals.png';
import React_Skeleton from '../../assets/React-Skeleton.png';
import React_Text_glicth_Effect from '../../assets/React-Text-Glitch-Effect.png';
import RealState from '../../assets/Real-State.PNG';
import RecipeFinder from '../../assets/Recipe_Finder.PNG';

import './portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Fundamentals} alt='Fundamentals' />
            <h3>Fundamentals</h3>
            <div className='portfolio__item-cta'>
              <a
                href='https://fundamentals.shop/'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Netflix} alt='Netflic Clone' />
            <h3>Netflix</h3>
            <div className='portfolio__item-cta'>
              <a
                href='https://github.com/AishwaryVishwakarma/Netflix'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              <a
                href='https://netflix-five-zeta.vercel.app/'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={React_Skeleton} alt='React Skeleton' />
            <h3>React-Skeleton</h3>
            <div className='portfolio__item-cta'>
              <a
                href='https://github.com/AishwaryVishwakarma/React-Skeleton'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              <a
                href='https://codesandbox.io/p/devbox/w7kqhq?file=%2Fsrc%2FApp.tsx%3A8%2C1'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={RecipeFinder} alt='Recipe Finder App' />
            <h3>Recipe Finder App</h3>
            <div className='portfolio__item-cta'>
              <a
                href='https://github.com/AishwaryVishwakarma/Recipe-Finder'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              <a
                href='https://recipe-finder-appliaction.netlify.app/'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img
              src={React_Text_glicth_Effect}
              alt='React Text Glitch Effect'
            />
            <h3>React-Text-Glitch-Effect</h3>
            <div className='portfolio__item-cta'>
              <a
                href='https://github.com/AishwaryVishwakarma/react-text-glitch-effect'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              <a
                href='https://codesandbox.io/p/devbox/8z4s4n?file=%2Fsrc%2FApp.jsx%3A10%2C29'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={RealState} alt='Real State' />
            <h3>Real State Website</h3>
            <div className='portfolio__item-cta'>
              <a
                href='https://github.com/AishwaryVishwakarma/Real-State'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              <a
                href='https://real-state-webapp.netlify.app/'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
