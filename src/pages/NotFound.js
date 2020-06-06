import React from "react";
import "./styles/NotFound.css";

import logoConf from "../images/platziconf-logo.svg";

function NotFound() {
  return (
    <div className="NotFound">
      <img
        className="NotFound__platziConf"
        src={logoConf}
        alt="Logo PlatziConf"
      />
      <h1>404: Page Not Found</h1>
    </div>
  );
}

export default NotFound;
