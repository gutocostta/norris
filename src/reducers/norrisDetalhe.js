import {
  FETCH_NORRIS_DETALHE_STARTED,
  FETCH_NORRIS_DETALHE_SUCCEEDED,
  FETCH_NORRIS_DETALHE_FAILED
} from "../actions/actionTypes";


const norrisDetalheReducer = (
  state = {
    isFetching: false,
    hasFetched: false
  },
  action
) => {
  switch (action.type) {
    case FETCH_NORRIS_DETALHE_STARTED:
      return Object.assign({}, state, {
        isFetching: true,
        hasFetched: false
      });
    case FETCH_NORRIS_DETALHE_SUCCEEDED:
      return Object.assign({}, state, {
        isFetching: false,
        hasFetched: true,
        categoriaDetalhe: action.categoriaDetalhe
      });
    case FETCH_NORRIS_DETALHE_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        hasFetched: true,
        error: action.error
      });
    default:
      return state;
  }
};

export default norrisDetalheReducer;
