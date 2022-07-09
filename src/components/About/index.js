import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimtaedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import LogoS from './../../assets/images/logo-s.png';
import LogoSubtitle from './../../assets/images/Sibt-e-Ali.png';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimtaedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={10}
              />
            </h1>
            <p>
              I'm a MERN Stack developer and Freelancer looking forward to work
              with diversed background IT company large or small but making an
              impact on people's lives{' '}
            </p>
            <p>
              I also love to work in startups due to their struggling envoirment
              to survive and learn about things we have never learned before{' '}
            </p>
            <p>
              In short, I'm a freelancer, gamer, singer, speaker, traveler and
              coder by passion
            </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNodeJs} color="#83CD29" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
            <div class="particle particle-1"></div>
            <div class="particle particle-4"></div>
          </div>
        </div>
      ) : (
        <div className="loaderGrow">
          <div class="loader logo">
            <img src={LogoS} alt="logo" />
            <img
              className="sub-logo"
              style={{ width: '60px' }}
              src={LogoSubtitle}
              alt="logo subtitle"
            />
            <br />
          </div>
          <div className="containerGrow">
            <div className="lineGrow"></div>
            <p>Sibteali Baqar Working</p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
