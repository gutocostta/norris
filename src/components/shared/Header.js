import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Logo from "./Logo";
import MenuHeader from "./MenuHeader";
import BuscaHeader from "./BuscaHeader";
import MenuLoja from "./MenuLoja";

import { removerProdutoCarrinho } from "../../actions/carrinho";
import { removeWarningStatus } from "../../actions/pedidos";
import { fetchBusca, limparTermoBusca } from "../../actions/busca";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      openBusca: false
    };
  }

  handleCommand = cmd => {
    const {
      removerProdutoCarrinho,
      handleCommand,
      fetchBusca,
      limparTermoBusca
    } = this.props;

    switch (cmd.op) {
      case "buscar":
        fetchBusca(cmd.params);
        break;
      case "limpar-termo-busca":
        limparTermoBusca();
        break;
      case "open-menu-mobile":
        this.setState({
          menuOpen: !this.state.menuOpen
        });
        break;
      case "open-busca":
        this.setState({
          openBusca: !this.state.openBusca
        });
        break;
      case "remover-produto":
        removerProdutoCarrinho(cmd.params.produtoId);
        break;
      case "remover-warning-status":
        removeWarningStatus();
        break;
      case "alterar-segmento":
        handleCommand(cmd);
        this.setState({
          menuOpen: !this.state.menuOpen
        });
        break;
      default:
        break;
    }
  };

  render() {
    const {
      props: {
        location,
        titulo,
        produtos,
        produtoPorSegmento,
        segmentoSelecionado,
        busca
      }
    } = this;

    return (
      <header
        className={`header ${
          location.pathname === "/" || location.pathname === "/resultado-busca"
            ? "home"
            : ""
        }`}
      >
        <div id="headerNavContent" className="content">
          <div id="headerNav" className="page-content">
            <Grid fluid>
              <Row>
                <Col xs={5} md={3}>
                  <Logo />
                </Col>
                <Col className="desktop" md={6}>
                  <BuscaHeader
                    busca={busca}
                    handleCommand={this.handleCommand}
                  />
                </Col>
                <Col xs={7} md={3}>
                  <MenuHeader
                    {...this.props}
                    handleCommand={this.handleCommand}
                  />
                </Col>
              </Row>

              <Row className="mobile">
                <Col
                  xs={12}
                  className={`busca-mobile ${
                    this.state.openBusca ? "open" : "close"
                  }`}
                >
                  <BuscaHeader
                    busca={busca}
                    handleCommand={this.handleCommand}
                  />
                </Col>
              </Row>

              {titulo && (
                <Row>
                  <Col xs={12}>
                    <div className="titulo">
                      <h1>{titulo.titulo}</h1>
                      {titulo.subtitulo && <p> {titulo.subtitulo} </p>}
                    </div>
                  </Col>
                </Row>
              )}
            </Grid>
          </div>
          <div className="page-content menu-loja">
            {produtoPorSegmento.hasFetched && (
              <MenuLoja
                handleCommand={this.handleCommand}
                menuOpen={this.state.menuOpen}
                produtos={busca.itens ? busca.itens.produtos : produtos}
                produtoPorSegmento={
                  busca.itens
                    ? busca.itens.produtoPorSegmento
                    : produtoPorSegmento
                }
                segmentoSelecionado={segmentoSelecionado}
              />
            )}
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  removerProdutoCarrinho,
  removeWarningStatus,
  fetchBusca,
  limparTermoBusca
};

const mapStateToProps = state => ({
  produtoPorSegmento: state.produtoPorSegmento,
  busca: state.busca
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
