import React, { useState, useEffect } from 'react';
import './index.scss';
import LogoS from './../../assets/images/logo-s.png';
import LogoSubtitle from './../../assets/images/Sibt-e-Ali.png';
import { Octokit } from 'octokit';
import repo_images from '../../assets/imageAssest';

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const octokit = new Octokit({
    auth: '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',
  });
  useEffect(() => {
    if (repos.length !== 0) {
      setLoading(false);
    }
    const fetchRepos = async () => {
      const response = await octokit.request(
        'GET /users/sibteali786/starred',
        {}
      );
      setRepos(response.data);
    };
    if (repos.length === 0 && loading) {
      fetchRepos().catch(console.error);
    }
    // eslint-disable-next-line
  }, [loading, repos]);

  const sliderHandler = (e) => {
    e.preventDefault();
    // get current slide
    var current = document
      .querySelector('.flex--active')
      .getAttribute('data-slide'); // gives value of data-slide attribute
    // get button data-slide
    var next = e.target.getAttribute('data-slide'); // getting current element which was clicked
    console.log(next, current);
    document.querySelectorAll('.slide-nav').forEach((element) => {
      element.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    if (current === next) {
      return false;
    } else {
      // add class flex--preStart to the div of class flex-container where data-slide = current event slide
      document.querySelectorAll('.flex__container').forEach((element) => {
        if (element.getAttribute('data-slide') === next) {
          element.classList.add('flex--preStart');
        }
      });
      document.querySelector('.flex--active').classList.add('animate--end');
      setTimeout(() => {
        // $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        document
          .querySelector('.flex--preStart')
          .classList.remove('animate--start', 'flex--preStart');
        document.querySelectorAll('.flex__container').forEach((element) => {
          if (element.getAttribute('data-slide') === next) {
            element.classList.add('flex--active');
          }
        });
        // $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        document.querySelector('.animate--end').classList.add('animate--start');
        document
          .querySelector('.animate--end')
          .classList.remove('animate--end', 'flex--active');
      }, 800);
    }
  };
  return (
    <>
      {!loading && repos.length !== 0 ? (
        <>
          <div id="slider__warpper">
            {repos.map((repo, index) => {
              return (
                <div
                  className={`flex__container ${
                    index === 0 ? 'flex--active' : ''
                  }`}
                  data-slide={index + 1}
                  key={index}
                >
                  <div className="flex__item flex__item--left">
                    <div className="flex__content">
                      <h1 className="text--big">{repo.name.toUpperCase()}</h1>
                      <p className="text--sub">{repo.full_name}</p>
                      <p className="text--normal">{repo.description}</p>
                      <a
                        href={repo.html_url}
                        className="actionButton"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Link To Repo
                      </a>
                    </div>
                    <p className="text__background">{repo.name}</p>
                  </div>
                  <div className="flex__item flex__item--right"></div>
                  {repo_images.map((image, index) => (
                    <img
                      className="pokemon__img"
                      src={
                        repo.name.toUpperCase() === image.name.toUpperCase()
                          ? `${image.url}`
                          : ''
                      }
                      alt="pikachu"
                    />
                  ))}
                </div>
              );
            })}
            <div className="slider__navi">
              {repos.map((item, index) => (
                <button
                  className={`slide-nav  ${index === 0 ? 'active' : ''}`}
                  data-slide={index + 1}
                  onClick={(e) => sliderHandler(e)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="loaderGrow">
          <div className="loader logo">
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

export default Project;
