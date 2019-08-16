import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => (
  <footer className="footer">
    <div className="page-content">
      <Grid fluid>
        <Row>
          <div className="footer-content">
            <Col sm={7} lg={8}>
              <p></p>
            </Col>
            <Col sm={2} lg={2}>
              <p></p>
            </Col>
            <Col sm={3} lg={2}>
              <p></p>
            </Col>
          </div>
        </Row>
      </Grid>
    </div>
  </footer>
);
