import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Home from "../pages/Home";


class HomeContainer extends Component {
  

  handleCommand = cmd => {
    const {
      props: {
        carregarMaisProdutosAction,
        alterarSegmento,
        segmentoSelecionado
      }
    } = this;

    switch (cmd.op) {
      case "alterar-segmento":
        alterarSegmento(cmd.params.segmento);
        break;
      case "carregar-mais-produtos":
        carregarMaisProdutosAction(
          {
            filtro: [segmentoSelecionado],
            skip: this.handleProdutosLista().itens.length,
            take: 12
          },
          !!segmentoSelecionado ? true : false
        );
        if (!segmentoSelecionado)
          this.setState({
            rowLimit: this.state.rowLimit + 12
          });
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    const {
      props: {
        categorias
      }
    } = this;

    if (!categorias.hasFetched) {
      fetchNorris();
    }
  }
  

  render() {
    const {
      props: { categorias }
    } = this;

    return (
      <div className="page-home">
        <main>
          {!this.handleProdutosLista().isLoading && (
            <Home
              produtos={this.handleProdutosLista().itens}
              handleCommand={this.handleCommand}
              isLoading={categorias.isFetching}
            />
          )}
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchNorris
};

const mapStateToProps = state => ({
  cateorias: state.cateorias
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer)
);
