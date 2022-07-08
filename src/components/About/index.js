import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimtaedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimtaedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a MERN Stack developer and Freelancer looking forward to work with
          diversed background IT company large or small but making an impact on
          people's lives{' '}
        </p>
        <p>
          I also love to work in startups due to their struggling envoirment to
          survive and learn about things we have never learned before{' '}
        </p>
        <p>
          In short, I'm a freelancer, gamer, singer, speaker, traveler and coder
          by passion
        </p>
      </div>
      <div className="stage-cube-font">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5Ed4f4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faNodeJs} color="#83CD29" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
