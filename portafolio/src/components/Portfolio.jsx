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
        <h2 className="Portfolio-projectsTitle">Projects</h2>
        <div className="Portfolio-projects row container-fluid">
          <div className="col-md Portfolio-finished-project">
              <br/>
              <h4 className='pokemon-info'>Pokémon Go Notes</h4>
            <a
              href="https://tita-navarro.github.io/GDL002-data-lovers/src/index.html"
              target="_blank"
            >
              <img
                src={require("../images/PokemonGoNotes.png")}
                className="rounded img-fluid pokemon-img"
                alt="project-pokemon"
              />
            </a>
            <h5 className="pokemon-info">
              In this project, I used a database to give the user <br />
              information about Pokémon in Kanto region
            </h5>
            <p className="technologies">
              Javascript, HTML5, CCS3, Git/Github, Jest
            </p>
          </div>
          <div className="col-md Portfolio-finished-project">
              <h4 className='socialnetwork-info'>Mundo Dulce</h4>
            <a
              href="https://red-social-595e4.firebaseapp.com/login"
              target="_blank"
            >
              <img
                src={require("../images/mundo_dulce.png")}
                className="rounded img-fluid mundoDulce-img"
                alt="project-mundoDulce"
              />
            </a>
            <h5 className="socialnetwork-info">
              In this project, in a teamwork, I created a social network for
              desserts <br />
              and recipes about these. You can create your account and make a
              publication.
            </h5>
            <p className="technologies">
              Javascript, HTML5, Bootstrap (CCS3), Git/Github, Firebase
            </p>
          </div>
        </div>
        <h2 className='Portfolio-projectsTitle'>Prototypes</h2>
        <div className="Portfolio-projects row container-fluid">
          <div className="col-md Portfolio-finished-project">
            <h4 className='organa-info'>Organa QRLector</h4>
            <a
              href="https://www.figma.com/proto/Yr7D9xxjBb3n70GbqEdSeMQY/Organa?node-id=2%3A25&viewport=524%2C350%2C0.07449441403150558&scaling=min-zoom"
              target="_blank"
            >
              <img
                src={require("../images/Organa.png")}
                className="rounded img-fluid prototype-img"
                alt="project-Organa"
              />
            </a>
            <h5 className="organa-info">
              I present this prototype with my team, this project resolve <br/>
              the problem to Laboratoria to take the assistance of the students there.
            </h5>
            <p className="technologies">
              Figma, Photoshop, React, Bootstrap, HTML5 <br/>
              You can see the advanced <a href='https://galiov.github.io/Organa-QRLector/#/'
              target='_blank'>here</a>
            </p>
          </div>
          <div className="col-md Portfolio-finished-project">
              <h4 className='segura-info'>Segura</h4>
            <a
              href="https://www.figma.com/proto/GZLWO1qVevelqlWzYei2e1ou/Segura?node-id=0%3A1&viewport=144%2C321%2C0.75&scaling=scale-down"
              target="_blank"
            >
              <img
                src={require("../images/segura.png")}
                className="rounded img-fluid mundoDulce-img"
                alt="project-mundoDulce"
              />
            </a>
            <h5 className="socialnetwork-info">
              Segura was a project created it in a hackaton "Hackeando La Desigualdad"<br/>
              The web has the purpose to help and fight the ciberbullying
            </h5>
            <p className="technologies">
              Figma, Photoshop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
