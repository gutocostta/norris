import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => (
  <footer className="footer">
    <div className="page-content">
      <Grid fluid>
        <Row>
          <div className="footer-content">
            <Col md={6} sm={7}>
              <p>Teste - Guiabolso - Desenvolvedor Frontend</p>
            </Col>
            <Col md={1} sm={2}>
            </Col>
            <Col md={5} sm={3}>
              <p className="text-right">Gustavo Costa</p>
            </Col>
          </div>
        </Row>
      </Grid>
    </div>
  </footer>
);
