import React from "react";
import "../styles/Projects.css";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";

const Projects = () => {
  return (
    <div className="Projects">
      <section className="Projects-container container-fluid">
        <h1 className="Projects-title">Projects & Prototypes</h1> <br />
        <br />
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
  </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../images/pokemon_go.png")}
                className="d-block w-100 project-img"
                alt="PokemonGoNotes"
              />
              <div className="carousel-caption d-none d-sm-block">
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://tita-navarro.github.io/GDL002-data-lovers/src/index.html"
                    className="c-email"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </AwesomeButtonProgress>
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://github.com/Tita-Navarro/GDL002-data-lovers"
                    className="c-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </AwesomeButtonProgress>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/mundo_dulce.png")}
                className="d-block w-100 project-img"
                alt="SocialNetwork"
              />
              <div className="carousel-caption d-none d-sm-block">
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://red-social-595e4.firebaseapp.com/login"
                    className="c-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </AwesomeButtonProgress>
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://github.com/Tita-Navarro/GDL002-social-network"
                    className="c-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </AwesomeButtonProgress>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/recetas.png")}
                className="d-block w-100 project-img"
                alt="SuperRecetas"
              />
              <div className="carousel-caption d-none d-sm-block">
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://super-recetas.tita1089.now.sh"
                    className="c-email"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </AwesomeButtonProgress>
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://github.com/Tita-Navarro/Electivo-SuperRecetas"
                    className="c-email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </AwesomeButtonProgress>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/galaxy-craft.png")}
                className="d-block w-100 project-img"
                alt="Galaxy-Craft"
              />
              <div className="carousel-caption d-none d-sm-block">
                <AwesomeButtonProgress
                  type="secondary"
                  size="small"
                  className="btn-sp2"
                >
                  <a
                    href="https://www.figma.com/proto/ec84QtNqWaxe8EM62J2Jp6/Galaxy-Craft?node-id=2%3A19&viewport=284%2C338%2C0.5&scaling=scale-down"
                    className="c-email"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Prototype
                  </a>
                </AwesomeButtonProgress>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/segura.png")}
                className="d-block w-100 project-img"
                alt="Segura"
              />
              <div className="carousel-caption d-none d-sm-block">
              <AwesomeButtonProgress
                  type="secondary"
                  size="medium"
                  className="btn-sp2"
                >
                  <a
                    href="https://www.figma.com/proto/GZLWO1qVevelqlWzYei2e1ou/Segura?node-id=3%3A5&viewport=72%2C322%2C0.24961762130260468&scaling=scale-down"                    
                    className="c-email"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Prototype
                  </a>
                </AwesomeButtonProgress>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../images/Organa.png")}
                className="d-block w-100 project-img"
                alt="Organa"
              />
              <div className="carousel-caption d-none d-sm-block">
              <AwesomeButtonProgress
                  type="secondary"
                  size="medium"
                  className="btn-sp2"
                >
                  <a
                    href="https://www.figma.com/proto/Yr7D9xxjBb3n70GbqEdSeMQY/Organa?node-id=2%3A25&viewport=492%2C347%2C0.06963051110506058&scaling=scale-down"                    
                    className="c-email"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Prototype
                  </a>
                </AwesomeButtonProgress>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
          </div>
        </section>
    </div>
  );
};

export default Projects;
