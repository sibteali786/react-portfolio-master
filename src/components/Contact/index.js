import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import LogoS from './../../assets/images/logo-s.png';
import LogoSubtitle from './../../assets/images/Sibt-e-Ali.png';
import AnimtaedLetters from '../AnimatedLetters';
import TextField from '@material-ui/core/TextField';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(false);
  const refForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [loading]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_25jt6zg',
        'template_69qfsyd',
        refForm.current,
        'o8qQdX_nnfdlHOCtH'
      )
      .then(
        () => {
          alert('Message Sent Successfully!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, Please try again');
        }
      );
  };
  return (
    <>
      {loading ? (
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimtaedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                letterClass={letterClass}
                idx={15}
              />
            </h1>
            <p>
              I' am interested to work as Freelancer or large or small projetcs
              either hourly or contract based. Although I am always available
              for any kind of request which can be made using this form.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <TextField
                      name="name"
                      required
                      label="Name"
                      type="text"
                      variant="outlined"
                    />
                  </li>
                  <li className="half">
                    <TextField
                      name="email"
                      required
                      label="Email"
                      type="email"
                      variant="outlined"
                    />
                  </li>
                  <li>
                    <TextField
                      name="subject"
                      required
                      label="Subject"
                      type="text"
                      variant="outlined"
                    />
                  </li>
                  <li>
                    <TextField
                      name="message"
                      label="Multiline"
                      multiline
                      minRows={5}
                      variant="outlined"
                    />
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
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

export default Contact;
