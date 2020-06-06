import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import logoConf from "../images/platziconf-logo.svg";
import imageAstronauts from "../images/astronauts.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__container">
          <div className="Home__col">
            <img
              className="Home__platziConf"
              src={logoConf}
              alt="Logo PlatziConf"
            />
            <h1>Platzi Badges</h1>
            <span className="Home_info font-weight-bold">
              La conferencia anual de Platzi.
            </span>
            <div className="Home__buttons">
              <Link to="/badges" className="btn btn-primary">
                Get Start
              </Link>
            </div>
          </div>

          <div>
            <img
              className="Home__astronauts"
              src={imageAstronauts}
              alt="Astronauts"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
