import React from 'react';
import '../styles/Projects.css';


const Projects =()=>{
    return(
        <div className='Projects'>
        <section className='Projects-container container-fluid'>
            <h1 className='Projects-title'>Projects & Prototypes</h1> <br/><br/>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("../images/pokemon_go.png")} className="d-block w-100 project-img" 
      alt="PokemonGoNotes"/>
    </div>
    <div className="carousel-item">
      <img src={require("../images/mundo_dulce.png")} className="d-block w-100 project-img" 
      alt="SocialNetwork"/>
    </div>
    <div className="carousel-item">
      <img src={require("../images/recetas.png")} className="d-block w-100 project-img" 
      alt="SuperRecetas"/>
    </div>
    <div className="carousel-item">
      <img src={require("../images/galaxy-craft.png")} className="d-block w-100 project-img" 
      alt="Galaxy-Craft"/>
    </div>
    <div className="carousel-item">
      <img src={require("../images/segura.png")} className="d-block w-100 project-img" 
      alt="Segura"/>
    </div>
    <div className="carousel-item">
      <img src={require("../images/Organa.png")} className="d-block w-100 project-img" 
      alt="Organa"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </section>
        </div>
    )
};

export default Projects;