import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import Logo from "./Logo";

class Header extends Component {

  render() {

    return (
      <header>
        <div className="content">
          <div className="page-content">
            <Grid fluid>
              <Row>
                <Col xs={4} md={3}>
                  <Logo />
                </Col>
                <Col xs={8} md={9}>
                  <h1>Chuck Norris App</h1>
                  <p>Chuck Norris answer for you!</p>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
