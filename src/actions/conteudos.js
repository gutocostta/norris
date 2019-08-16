import * as ActionTypes from "./actionTypes";
import { getCategorias, getCategoriaDetalhe } from "../services/conteudosService";


//categorias

const fetchNorrisStarted = () => ({
  type: ActionTypes.FETCH_NORRIS_STARTED
});

const fetchNorrisSucceeded = categorias => ({
  type: ActionTypes.FETCH_NORRIS_SUCCEEDED,
  categorias
});

const fetchNorrisFailed = error => ({
  type: ActionTypes.FETCH_NORRIS_FAILED,
  error
});

export const fetchNorris = () => dispatch => {
  dispatch(fetchNorrisStarted());

  getCategorias()
    .then(response => {
      const categorias = response.data;
      dispatch(fetchNorrisSucceeded(categorias));
    })
    .catch(error => {
      dispatch(fetchNorrisFailed());
    });

    // getCateorias()
    //     .then(response => {
    //       const ownCategorias = response.data;

    //       const categorias = Object.assign({}, ownCategorias, {
    //         itens: ownCategorias.itens.map(item =>
    //           Object.assign({}, item, {
    //             carregouDetalhe: false
    //           })
    //         )
    //       });

    //       dispatch(fetchNorrisSucceeded({ categorias }));
    //     })
    //     .catch(error => {
    //       dispatch(fetchNorrisFailed());
    //     });
};

//detalhes

const fetchNorrisDetalheStarted = () => ({
  type: ActionTypes.FETCH_NORRIS_DETALHE_STARTED
});

const fetchNorrisDetalheSucceeded = categoriaDetalhe => ({
  type: ActionTypes.FETCH_NORRIS_DETALHE_SUCCEEDED,
  categoriaDetalhe
});

const fetchNorrisDetalheFailed = error => ({
  type: ActionTypes.FETCH_NORRIS_DETALHE_FAILED,
  error
});

export const fetchNorrisDetalhe = id => dispatch => {
  dispatch(fetchNorrisDetalheStarted());

  getCategoriaDetalhe(id)
    .then(response => {
      const categoriaDetalhe = response.data;
      dispatch(fetchNorrisDetalheSucceeded(categoriaDetalhe));
    })
    .catch(error => {
      dispatch(fetchNorrisDetalheFailed());
    });
};

