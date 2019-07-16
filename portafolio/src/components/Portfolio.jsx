import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="Portfolio">
      <div className="Portfolio-container">
        <div className="Portfolio-info">
          <br />
          <h3 className="Portfolio-desc">
            Here you could see some of the projects and prototypes,
            <br />
            the technologies and a description about them.
          </h3>
        </div>
        <br/>
        <div className="Portfolio-projects card-deck row container-fluid">
          <div className="card card-bg col border-secondary">
            <img
              src={require("../images/PokemonGoNotes.png")}
              className="card-img-top"
              alt="pokemon-data"
            />
            <div className="card-body">
              <h5 className="card-title text">Pokémon Go Notes</h5>
              <p className="card-text project-info">
                In this project, I used a database to give the user information
                about Pokémon in Kanto region
              </p>
              <p className="card-text technologies">
                Technologies: Git/Github, HTML5, CSS3 Javascript ES6, Jest
              </p>
              <a
                href="https://tita-navarro.github.io/GDL002-data-lovers/src/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                See the project
              </a>
            </div>
          </div>
          <div className="card card-bg col border-secondary">
            <img
              src={require("../images/mundo_dulce.png")}
              className="card-img-top"
              alt="mundoDulce-social"
            />
            <div className="card-body">
              <h5 className="card-title text">Mundo Dulce</h5>
              <p className="card-text project-info">
                In this project, in a teamwork, I created a social network for
                desserts and recipes about these. You can create your account
                and make a publication.
              </p>
              <p className="card-text technologies">
                Technologies: Git/Github, HTML5, Javascript ES6, Bootstrap,
                Firebase
              </p>
              <a
                href="https://red-social-595e4.firebaseapp.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                See the project
              </a>
            </div>
          </div>
          <div className="card card-bg col border-secondary">
            <img
              src={require("../images/PWA.png")}
              className="card-img-top"
              alt="mundoDulce-social"
            />
            <div className="card-body">
              <h5 className="card-title text">Super-Recetas</h5>
              <p className="card-text project-info pokemon-info">
                I create the configuration files that I need to have a Web App
                into a PWA
              </p>
              <p className="card-text technologies">
                Technologies: Git/Github, React JS, Workbox, React-GA, Google
                LightHouse, Now.
              </p>
              <a
                href="https://super-recetas.tita1089.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                See the project
              </a>
            </div>
          </div>
        </div>
        <br/>
        <div className="Portfolio-projects row container-fluid">
        <div className="card card-bg border-secondary">
            <img
              src={require("../images/Organa.png")}
              className="card-img-top img-size"
              alt="organa-project"
            />
            <div className="card-body">
              <h5 className="card-title text">Organa-QRLector</h5>
              <p className="card-text project-info">
                I present this prototype with my team, this project resolve the
                problem to Laboratoria to take the assistance of the students
                there.
              </p>
              <p className="card-text technologies">
                Technologies: Figma, Photoshop, React, Bootstrap, HTML5
                You can see the advanced <a
                  href="https://galiov.github.io/Organa-QRLector/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
              <a
                href="https://www.figma.com/proto/Yr7D9xxjBb3n70GbqEdSeMQY/Organa?node-id=2%3A25&viewport=524%2C350%2C0.07449441403150558&scaling=min-zoom"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                See the project
              </a>
            </div>
            </div>
            <div className="card card-bg border-secondary">
            <img
              src={require("../images/segura.png")}
              className="card-img-top"
              alt="segura"
            />
            <div className="card-body">
              <h5 className="card-title text">Segura</h5>
              <p className="card-text project-info">
                Segura was a project created it in a hackaton "Hackeando La
                Desigualdad" The web has the purpose to help and fight the
                ciberbullying
              </p>
              <p className="card-text technologies">
                Technologies: Figma, Photoshop
              </p>
              <a
                href="https://www.figma.com/proto/GZLWO1qVevelqlWzYei2e1ou/Segura?node-id=0%3A1&viewport=144%2C321%2C0.75&scaling=scale-down"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                See the project
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
      
  );
};

export default Portfolio;
