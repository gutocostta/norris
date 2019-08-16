import React from "react";
import { Link } from "react-router-dom";

import logoLoja from "../../assets/images/chuck-logo.png";

export default () => (
  <div className="logo-header">
    <Link to="/">
      <img src={logoLoja} title="Chuck Norris" alt="Chuck Norris!" />
    </Link>
  </div>
);
