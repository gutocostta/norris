import * as ActionTypes from "./actionTypes";
import { getCateorias, getCategoriaDetalhe } from "../services/conteudosService";



const fetchNorrisStarted = () => ({
  type: ActionTypes.FETCH_NORRIS_STARTED
});

const fetchNorrisSucceeded = norris => ({
  type: ActionTypes.FETCH_NORRIS_SUCCEEDED,
  norris
});

const fetchNorrisFailed = error => ({
  type: ActionTypes.FETCH_NORRIS_FAILED,
  error
});

export const fetchNorris = () => dispatch => {
  dispatch(fetchNorrisStarted());

  getCateorias()
    .then(response => {
      const ownCategorias = response.data;

      const categorias = Object.assign({}, ownCategorias, {
        itens: ownCategorias.itens.map(item =>
          Object.assign({}, item, {
            carregouDetalhe: false
          })
        )
      });

      dispatch(fetchNorrisSucceeded({ categorias }));
    })
    .catch(error => {
      dispatch(fetchNorrisFailed());
    });
};


const fetchNorrisDetalheStarted = () => ({
  type: ActionTypes.FETCH_NORRIS_DETALHE_STARTED
});

const fetchNorrisDetalheSucceeded = norrisDetalhe => ({
  type: ActionTypes.FETCH_NORRIS_DETALHE_SUCCEEDED,
  norrisDetalhe
});

const fetchNorrisDetalheFailed = error => ({
  type: ActionTypes.FETCH_NORRIS_DETALHE_FAILED,
  error
});

export const fetchNorrisDetalhe = id => dispatch => {
  dispatch(fetchNorrisDetalheStarted());

  getCategoriaDetalhe(id)
    .then(response => {
      const ownCategoriaDetalhe = response.data;

      const categoriaDetalhe = Object.assign({}, ownCategoriaDetalhe, {
        carregouDetalhe: true
      });
      dispatch(fetchNorrisDetalheSucceeded(categoriaDetalhe));
    })
    .catch(error => {
      dispatch(fetchNorrisDetalheFailed());
    });
};

