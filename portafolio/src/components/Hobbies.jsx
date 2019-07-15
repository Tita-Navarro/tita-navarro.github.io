import React from "react";
import "../styles/Hobbies.css";

const Hobbies = () => {
  return (
    <div id="Hobbies" className="Hobbies">
      <div className="Hobbies-container">
        <div className="Hobbies-info">
          <br /> <br />
          <h1 className="Hobbies-title">Hobbies</h1>
          <div className="container Hobbies-info">
            <div className="row">
              <div className="col-md">
                <img
                  src={require("../images/hobbies.jpg")}
                  alt="tita_hobbies"
                  className="rounded 
                            float-left img-fluid hobbie-pic"
                />
              </div>
              <div className="col-md">
                <br /> <br />
                Vídeo
              </div>
            </div>{" "}
            <br />
            <div className="Hobbies-icon">
              <span className="icon-sports_basketball icon-colorb hobbie-icon" />
              <span className="icon-book1 icon-colorbook hobbie-icon" />
              <span className="icon-fitness_center icon-colorfit hobbie-icon" />
              <span className="icon-nature_people icon-colortree hobbie-icon" />{" "}
              <br />
              <br />
              <span className="icon-sports_soccer icon-colors hobbie-icon" />
              <span className="icon-videogame_asset icon-colorgame hobbie-icon" />
              <span className="icon-music_note icon-colorm hobbie-icon" />
              <span className="icon-movie icon-colormic hobbie-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
