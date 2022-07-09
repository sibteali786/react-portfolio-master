import React, {useState, useEffect} from 'react'
import "./index.scss"
import LogoS from './../../assets/images/logo-s.png';
import {Link} from "react-router-dom";
import AnimtaedLetters from '../AnimatedLetters';
import Logo from './Logo';
import LogoSubtitle from './../../assets/images/Sibt-e-Ali.png';
const Home = () => {
  const [letterClass,setLetterClass] = useState('text-animate');
  const nameArray = ['i','b','t','-','e','-','A','l','i',','];
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    const animTimer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    const loaderTimer = setTimeout(() => {
        setLoading(true);
      }, 2000);
  }, [])
  
  return (
    <>
    {loading ? (<div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _11`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br/>
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoS} alt='developer'/>
        <AnimtaedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        <br/>
        <AnimtaedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>Frontend Developer / ReactJs / MERN Stack</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>) : (<div class="loader logo">
        <img src={LogoS} alt="logo" />
        <img
          className="sub-logo"
          style={{ width: '60px' }}
          src={LogoSubtitle}
          alt="logo subtitle"
        />
        <br />
        <span>Sibteali Baqar Working</span>
      </div>)}
    
    
</>
  )
}

export default Home