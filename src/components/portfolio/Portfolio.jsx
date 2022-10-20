import React from 'react'
import "./portfolio.css"
import Text_Util from "../../assets/text-utils.png";
import News from "../../assets/newsapp.png";
import RealState from "../../assets/Real-State.PNG"
import RecipeFinder from "../../assets/Recipe_Finder.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Text_Util} alt="text-utility website" />
            <h3>Text-Utils</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/AishwaryVishwakarma/Text-Utility-React"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://splendorous-banoffee-74d957.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={News} alt="News website" />
            <h3>News Application</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/AishwaryVishwakarma/News-App-React"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              {/* <a
              href="https://splendorous-banoffee-74d957.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RealState} alt="Real State" />
            <h3>Real State Website</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/AishwaryVishwakarma/Real-State"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://incandescent-salamander-06ee7a.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RecipeFinder} alt="Real State" />
            <h3>Recipe Finder App</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/AishwaryVishwakarma/Recipe-Finder"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://verdant-sable-9f43fb.netlify.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio