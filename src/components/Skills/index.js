import React, { useState, useEffect } from 'react';
import "./index.scss";
import TagCloud from 'TagCloud';
import LogoS from './../../assets/images/logo-s.png';
import LogoSubtitle from './../../assets/images/Sibt-e-Ali.png';
import AnimtaedLetters from '../AnimatedLetters';

const Skills = () => {
  const [loading, setLoading] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    const container = '.tagcloud';
    const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Python', 'C++', 'React', 'git', 'Node.js', 'OpenCV',
    'PWAs', 'MySQL', 'jQuery', 'ExpressJs','Firebase'
    ,'MongoDB', 'Pandas','Numpy','Github',"Redux"
  ];
  const options = {
     // radius in px
     radius: 300,
  
     // animation speed
     // slow, normal, fast
     maxSpeed: 'fast',
     initSpeed: 'fast',
   
     // 0 = top
     // 90 = left
     // 135 = right-bottom
     direction: 135,
     
     // interact with cursor move on mouse out
     keep: false
    };
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    setTimeout(() => {
      setLoading(true);
      TagCloud(container, myTags, options);
    }, 2000);
  }, [loading]);
  

  return (
    <>
    {loading?(
      <div className="container skills-page">

        <div className="text-zone">
      <h1 style={{lineHeight:"50px"}}>
        <AnimtaedLetters
          letterClass={letterClass}
          strArray={['S', 'k', 'i', 'l', 'l', 's',' ',' &']}
          idx={10}
        />
        <br/>
        <AnimtaedLetters 
        letterClass={letterClass}
        strArray={['E','x','p','e','r','i','e','n','c','e']}
        idx={10}
        />
      </h1>
      <p>
        More than one year of experience in working with MERN stack web apps inlcudling technologies like{' '}
      <span className="tech-tags">HTML</span>,
      <span className="tech-tags"> CSS</span>,
      <span className="tech-tags"> JS</span>,
      <span className="tech-tags"> React</span>,
      <span className="tech-tags"> NodeJs</span>,
      <span className="tech-tags"> Express</span>,
      <span className="tech-tags"> MongoDB</span>,
      <span className="tech-tags"> TypeScript</span>,
      <span className="tech-tags"> Redux</span>,
      <span className="tech-tags"> Firebase</span>
      </p>
      <p>
        Also worked with Web Designing for sometime and have know how of 
        <span className="tech-tags"> Figma</span> to make design with better UI/UX 
        {' '}
      </p>
      <p>
        You can also check my social meida profiles like 
        <a href="https://www.linkedin.com/in/syed-sibteali-baqar-03167a17a/"> LinkedIn</a> and
        <a href="https://github.com/sibteali786"> GitHub</a>.
        Also have a look at my 
        <a target="_blank" href="src\assets\SibtealiBaqarMERN.pdf">CV</a>
      </p>
    </div>
      <div className="tagcloud">
      </div>
      </div>
    ):(
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
    </div>)}
      
    </>
  );
};



export default Skills;
