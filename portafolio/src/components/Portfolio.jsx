import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="Portfolio">
      <div className="Portfolio-container">
        <div className="Portfolio-info row">
          <br /><br/>
        </div>
          <h4 className='Portfolio-projectsTitle'>Projects</h4>
        <div className="bd-example Portfolio-size col-md">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleCaptions" data-slide-to="1" />
              <li data-target="#carouselExampleCaptions" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a
                  href="https://tita-navarro.github.io/GDL002-data-lovers/src/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/PokemonGoNotes.png")}
                    className="d-block img-size"
                    alt="pokemon-app"
                  />
                </a>
                <div className="carousel-caption d-sm-block Portfolio-bgtext">
                  <h5 className='Portfolio-TitleProject'>Pokémon Go Notes</h5>
                  <p className='Portfolio-InfoProject'>
                    {" "}
                    In this project, I used a database to give the user
                    information about Pokémon in Kanto region
                  </p>
                  <p className='Portfolio-InfoProject'>
                    Technologies: HTML5, CSS3, Javascript ES6, Jest, Git/Github{" "}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="https://red-social-595e4.firebaseapp.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/mundo_dulce.png")}
                    className="d-block img-size"
                    alt="social-network"
                  />
                </a>
                <div className="carousel-caption d-sm-block Portfolio-bgtext">
                  <h5 className='Portfolio-TitleProject'>Mundo Dulce</h5>
                  <p className='Portfolio-InfoProject'>
                    In a teamwork, I created a social network. You can create
                    your account and make post.
                  </p>
                  <p className='Portfolio-InfoProject'>
                    Technologies: Git/Github, HTML5, Javascript ES6, Bootstrap,
                    Firebase
                  </p>
                </div>
              </div>
              <div className="carousel-item">
              <a
                href="https://super-recetas.tita1089.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../images/PWA.png")}
                  className="d-block img-size"
                  alt="PWA"
                /></a>
                <div className="carousel-caption d-sm-block Portfolio-bgtext">
                  <h5 className='Portfolio-TitleProject'>Súper Recetas</h5>
                  <p className='Portfolio-InfoProject'>
                    I create the configuration files that I need to have a Web
                    App into a PWA
                  </p>
                  <p className='Portfolio-InfoProject'>
                    Technologies: React JS, Bootstrap, Workbox, Google
                    LightHouse, React-GA, Now.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <h4 className='Portfolio-projectsTitle'>Prototypes</h4>
        <div className="bd-example col-md">
          <div
            id="carouselExampleCaptions2"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions2"
                data-slide-to="3"
                className="active"
              />
              <li data-target="#carouselExampleCaptions2" data-slide-to="4" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a
                  href="https://www.figma.com/proto/Yr7D9xxjBb3n70GbqEdSeMQY/Organa?node-id=2%3A25&viewport=524%2C350%2C0.07449441403150558&scaling=min-zoom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/Organa.png")}
                    className="d-block img-size"
                    alt="Organa-app"
                  />
                </a>
                <div className="carousel-caption d-sm-block Portfolio-bgtext">
                  <h5 className='Portfolio-TitleProject'> Organa QrLector </h5>
                  <p className='Portfolio-InfoProject'>
                  I present this prototype with my team, this project resolve the
                problem to Laboratoria to take the assistance of the students
                there.
                  </p>
                  <p className='Portfolio-InfoProject'>
                    Technologies: React JS, Bootstrap, Git/Github, Photoshop, Figma. 
                    You can see the advanced <a
                  href="https://galiov.github.io/Organa-QRLector/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <a
                  href="https://www.figma.com/proto/GZLWO1qVevelqlWzYei2e1ou/Segura?node-id=0%3A1&viewport=144%2C321%2C0.75&scaling=scale-down"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/segura.png")}
                    className="d-block img-size"
                    alt="Segura"
                  />
                </a>
                <div className="carousel-caption d-sm-block Portfolio-bgtext">
                  <h5 className='Portfolio-TitleProject'>Segura</h5>
                  <p className='Portfolio-InfoProject'>
                  Segura was a project created it in a hackaton "Hackeando La
                  Desigualdad" The web has the purpose to help and fight the
                  ciberbullying.
                  </p>
                  <p className='Portfolio-InfoProject'>
                    Technologies: Figma, Photoshop.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions2"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions2"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
          <image src={require('../images/mickey-reload-time.png')} alt='reload-mickey'
          className='position-mickey'/>
      </div>
    </div>
  );
};

export default Portfolio;
