import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid } from "react-flexbox-grid";

import { fetchNorris, fetchNorrisDetalhe } from "../../actions/conteudos";

import Loader from "../shared/Loader";
import Home from "../pages/Home";


class HomeContainer extends Component {


  handleCommand = cmd => {
    const {
      props: {
        fetchNorrisDetalhe
      }
    } = this;

    switch (cmd.op) {
      case "categoria-detalhe":
        fetchNorrisDetalhe(cmd.params);
        break;
      default:
        break;
    }
  };

  componentDidMount() {

    const { fetchNorris, categorias } = this.props;

    if (!categorias) {
      fetchNorris();
    }
  }

  render() {
    const {
      props: { categorias, categoriaDetalhe, categoriaDetalheLoading }
    } = this;

    console.log(categorias);

    if (!categorias || categorias.isFetching) {
      return (
        <Grid className="app-container loading">
          <div className="loader-container">
            <Loader loading={true} className="loader" />
          </div>
        </Grid>
      );
    }

    return (
      <div className="page-home">
        <main>
            <Home
              categorias={categorias}
              categoriaDetalhe={categoriaDetalhe}
              categoriaDetalheLoading={categoriaDetalheLoading}
              handleCommand={this.handleCommand}
            />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchNorris,
  fetchNorrisDetalhe
};

const mapStateToProps = state => ({
  categorias: state.norris.categorias,
  categoriaDetalhe : state.norrisDetalhe.categoriaDetalhe,
  categoriaDetalheLoading : state.norrisDetalhe.isFetching
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer)
);
