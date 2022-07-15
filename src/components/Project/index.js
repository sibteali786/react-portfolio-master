import React, { useState, useEffect } from 'react';
import './index.scss';
import LogoS from './../../assets/images/logo-s.png';
import LogoSubtitle from './../../assets/images/Sibt-e-Ali.png';
const Project = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [loading]);
  const sliderHandler = (e) => {
    e.preventDefault();
    // get current slide
    var current = document.querySelector('.flex--active').getAttribute('data-slide'); // gives value of data-slide attribute
      // get button data-slide
    var next = e.target.getAttribute('data-slide');   // getting current element which was clicked 
    console.log(next,current);
    document.querySelectorAll('.slide-nav').forEach(element => {
      element.classList.remove('active')
    });
    e.currentTarget.classList.add('active')

    if(current === next){
      return false
    }else{
      // add class flex--preStart to the div of class flex-container where data-slide = current event slide
      document.querySelectorAll('.flex__container').forEach(element => {
        if(element.getAttribute('data-slide') === next){
          element.classList.add('flex--preStart')
        }
      });
      document.querySelector('.flex--active').classList.add('animate--end')
      setTimeout(() => {
        // $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        document.querySelector('.flex--preStart').classList.remove('animate--start','flex--preStart');
        document.querySelectorAll('.flex__container').forEach(element => {
          if(element.getAttribute('data-slide') === next){
            element.classList.add('flex--active')
          }
        });
        // $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        document.querySelector('.animate--end').classList.add('animate--start');
        document.querySelector('.animate--end').classList.remove('animate--end','flex--active')
      }, 800);
    }
  };
  return (
    <>
      {loading ? (
        <>
          <div id="slider__warpper">
            <div
              className="flex__container flex--pikachu flex--active"
              data-slide="1"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen I</p>
                  <h1 className="text--big">Pikachu</h1>
                  <p className="text--normal">
                    Pikachu is an Electric-type Pokémon introduced in Generation
                    I. Pikachu are small, chubby, and incredibly cute mouse-like
                    Pokémon. They are almost completely covered by yellow fur.
                  </p>
                </div>
                <p className="text__background">Pikachu</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img
                className="pokemon__img"
                src="https://s4.postimg.org/fucnrdeq5/pikachu.png"
                alt="pikachu"
              />
            </div>
            <div
              className="flex__container flex--piplup animate--start"
              data-slide="2"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen IV</p>
                  <h1 className="text--big">Piplup</h1>
                  <p className="text--normal">
                    Piplup is the Water-type Starter Pokémon of the Sinnoh
                    region. It was introduced in Generation IV. Piplup has a
                    strong sense of self-esteem. It seldom accepts food that
                    people give because of its pride.
                  </p>
                </div>
                <p className="text__background">Piplup</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img
                className="pokemon__img"
                src="https://s4.postimg.org/sa9dl4825/pilup.png"
                alt="pilup"
              />
            </div>
            <div
              className="flex__container flex--blaziken animate--start"
              data-slide="3"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen III</p>
                  <h1 className="text--big">Blaziken</h1>
                  <p className="text--normal">
                    Blaziken is the Fire/Fighting-type Starter Pokémon of the
                    Hoenn region, introduced in Generation III. Blaziken is a
                    large, bipedal, humanoid bird-like Pokémon that resembles a
                    rooster.
                  </p>
                </div>
                <p className="text__background">Blaziken</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img
                className="pokemon__img"
                src="https://s4.postimg.org/6795hnlql/blaziken.png"
                alt="blaziken"
              />
            </div>
            <div
              className="flex__container flex--dialga animate--start"
              data-slide="4"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen IV</p>
                  <h1 className="text--big">Dialga</h1>
                  <p className="text--normal">
                    Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a
                    sauropod-like Pokémon. It is mainly blue with some gray,
                    metallic portions, such as its chest plate, which has a
                    diamond in the center. It also has various, light blue lines
                    all over its body.
                  </p>
                </div>
                <p className="text__background">Dialga</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img
                className="pokemon__img"
                src="https://s4.postimg.org/43yq9zlxp/dialga.png"
                alt="dialpa"
              />
            </div>
            <div
              className="flex__container flex--zekrom animate--start"
              data-slide="5"
            >
              <div className="flex__item flex__item--left">
                <div className="flex__content">
                  <p className="text--sub">Pokemon Gen V</p>
                  <h1 className="text--big">Zekrom</h1>
                  <p className="text--normal">
                    Zekrom is a Dragon/Electric-type Legendary Pokémon. It is
                    part of the Tao Trio, along with Reshiram and Kyurem. Zekrom
                    is a large, black draconian Pokémon that seems to share its
                    theme with its counterpart, Reshiram. It has piercing red
                    eyes and dark gray to black skin that seems to be
                    armor-like.
                  </p>
                </div>
                <p className="text__background">Zekrom</p>
              </div>
              <div className="flex__item flex__item--right"></div>
              <img
                className="pokemon__img"
                src="https://s4.postimg.org/malmhgn9p/zekrom.png"
                alt="zekrom"
              />
            </div>
          </div>
          <div className="slider__navi">
            <button
              className="slide-nav active"
              data-slide="1"
              onClick={ e => sliderHandler(e)}
            >
              pikachu
            </button>
            <button
              
              className="slide-nav"
              data-slide="2"
              onClick={e => sliderHandler(e)}
            >
              piplup
            </button>
            <button
              
              className="slide-nav"
              data-slide="3"
              onClick={e => sliderHandler(e)}
            >
              blaziken
            </button>
            <button
              
              className="slide-nav"
              data-slide="4"
              onClick={e => sliderHandler(e)}
            >
              dialga
            </button>
            <button
              className="slide-nav"
              data-slide="5"
              onClick={e => sliderHandler(e)}
            >
              zekrom
            </button>
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
