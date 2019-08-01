import React from "react";
import "../styles/AboutMe.css";
import "../styles/style.css";
import ReactPlayer from "react-player";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="About container-fluid">
      <div className="About-container">
        <div className="About-brand">
          <br /> <br /> <br /> <br />
          <img
            src={require("../images/Castelnav.png")}
            alt="brand"
            className="mx-auto d-block 
                    img-fluid resp_img about-cast"
          />
          <h2 className="About-info title">- FrontEnd UX -</h2>
        </div>
        <br />
        <div>
          <h4 className="About-info name-alias">Martha M. Navarro "Tita"</h4>
        </div>
        <div className="container-fluid AboutMe">
          <div className="row">
            <div className="col-sm">
              <img
                src={require("../images/tita_color.png")}
                alt="tita"
                className="mx-auto img-fluid 
                            resp_photo"
              />
            </div>
            <div className="col-sm">
              <a href="#exampleModal" data-toggle="modal" data-target="#exampleModal">
                <h3 className="About-video">About Me</h3>{" "}
              </a>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Something about me
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body"><h5>Hello, I am a FrontEnd Dev and Digital
                    Marketer. I am a passionate, friendly and lovely woman. I love to be 
                    happy, optimism and I believe if we work in team we would have the
                    best results. </h5>
                    <h5>Do you want to know more about me? Contact Me!</h5>
                    <img src={require("../images/modal-photo.jpg")} alt="modal-img" 
                    className='photo-modal'/>
                   </div>
                  </div>
                </div>
              </div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=WjcylW50-q4"
                className="react-player video-player"
                playing
                width="30rem"
                height="18rem"
              />
            </div>
          </div>
          <br />
          <div className="About-Skills container">
            <div className="row">
              <div className="col-md About-container-icon">
                <h2 className="About-info soft About-soft">Soft Skills</h2>
                <h5 className="About-info soft">Teamwork</h5>
                <h5 className="About-info soft">Responsability</h5>
                <h5 className="About-info soft">Self-learning</h5>
                <h5 className="About-info soft">Honesty</h5>
                <h5 className="About-info soft">Empathy</h5>
                <h5 className="About-info soft">Leadership</h5>
              </div>
              <div className="col-md About-container-icon">
                <h2 className="About-info tech">Technical Skills</h2>
                <span className="devicon-javascript-plain colored About-iconskill" />
                <span className="icon-html5 About-iconskill" />
                <span className="icon-css31 About-iconskill" />
                <span className="icon-bootstrap About-iconskill" />
                <span className="devicon-react-original-wordmark colored About-iconskill" />
                <span className="devicon-photoshop-line colored About-iconskill" />
                <br /> <br />
                <span className="icon-figma About-iconskill icon-move" />
                <span className="icon-react About-iconskill" />
                <span className="devicon-nodejs-plain colored About-iconskill" />
                <span className="icon-git1 About-iconskill" />
                <span className="icon-github1 About-iconskill icon-color" />
                <span className="devicon-trello-plain colored About-iconskill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
