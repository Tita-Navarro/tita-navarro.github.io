import React from "react";
import "../styles/AboutMe.css";
import "../styles/style.css";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="About container-fluid">
      <div className="About-container">
        <div className="container-fluid AboutMe">
          <br/><br/><br/>
          <div className="row">
            <div className="col-sm pic-div">
              <img
                src={require("../images/tita_color.png")}
                alt="tita"
                className="mx-auto img-fluid 
                            resp_photo"
              />
  </div>
            <div className="col-sm About-text">
                <h5 className="About-info text2">Hello, my name is</h5>
                <h1 className="About-info text2 name">Martha Navarro</h1>
                <h3 className='About-info text2'>I love to learn and build 
                experiences on web.</h3>
                <h4 className="About-info text2">I am a FrontEnd Developer 
                with a background in Digital Marketing in Guadalajara,MX. 
                <br/> I worked 
                with HTML, CSS, Javascript, Bootstrap and React.<br/>
                You could send an e-mail: tita1089@gmail. I'll answer as
                soon as possible.</h4>
                </div>
              </div>
            </div>
          <br />
          <div className="About-Skills container">
            <div className="row">
              <div className="col-sm About-container-soft">
                <h1 className="About-info About-soft">Soft Skills</h1>
                <h5 className="About-info soft">Teamwork</h5>
                <h5 className="About-info soft">Responsability</h5>
                <h5 className="About-info soft">Self-learning</h5>
                <h5 className="About-info soft">Honesty</h5>
                <h5 className="About-info soft">Empathy</h5>
                <h5 className="About-info soft">Leadership</h5>
              </div>
              <div className="col-sm About-container-icon">
                <h1 className="About-info tech">Technical Skills</h1>
                <span className="devicon-javascript-plain colored About-iconskill" />
                <span className="icon-html5 About-iconskill" />
                <span className="icon-css31 About-iconskill" />
                <span className="icon-bootstrap About-iconskill" />
                <span className="devicon-react-original-wordmark colored About-iconskill" />
                <br /> <br />
                <span className="icon-figma About-iconskill icon-move" />
                <span className="icon-react About-iconskill" />
                <span className="devicon-nodejs-plain colored About-iconskill" />
                <span className="icon-git1 About-iconskill" />
                <span className="icon-github1 About-iconskill icon-color" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutMe;
