import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import logoFooter from "../../assets/images/logo-caixa.png";

export default () => (
  <footer className="footer">
    <div className="page-content">
      <Grid fluid>
        <Row>
          <div className="footer-content">
            <Col sm={7} lg={8}>
              <div className="logo-caixa">
                <img src={logoFooter} alt="Caixa Seguradora" />
              </div>
            </Col>
            <Col sm={2} lg={2}>
              <p>Telefone para solicitações ou dúvidas</p>
            </Col>
            <Col sm={3} lg={2}>
              <p className="fone">0800 722 2492</p>
            </Col>
          </div>
        </Row>
      </Grid>
    </div>
  </footer>
);
