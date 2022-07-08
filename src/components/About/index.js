import React,{useState,useEffect} from 'react';
import './index.scss';
import AnimtaedLetters from '../AnimatedLetters';
const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
      }, [])
      
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
          I'm a MERN Stack developer and Freelancer looking forward to work with diversed
          background IT company large or small but making an impact on people's
          lives{' '}
        </p>
        <p>
          I also love to work in startups due to their struggling envoirment to
          survive and learn about things we have never learned before{' '}
        </p>
        <p>In short, I'm a freelancer, gamer, singer, speaker, traveler and coder by passion</p>
      </div>
    </div>
  );
};

export default About;
