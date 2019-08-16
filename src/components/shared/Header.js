import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import Logo from "./Logo";

class Header extends Component {

  render() {

    return (
      <header>
        <div id="headerNavContent" className="content">
          <div id="headerNav" className="page-content">
            <Grid fluid>
              <Row>
                <Col xs={6} md={4}>
                  <Logo />
                </Col>
                <Col xs={6} md={8}>
                  <h2>Chuck Norris answer for you!</h2>
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
