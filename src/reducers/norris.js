import {
  FETCH_NORRIS_STARTED,
  FETCH_NORRIS_SUCCEEDED,
  FETCH_NORRIS_FAILED
} from '../actions/actionTypes';

const norrisReducer = (
  state = {
    isFetching: false,
    hasFetched: false
  },
  action
) => {
  switch (action.type) {
    case FETCH_NORRIS_STARTED:
      return Object.assign({}, state, {
        isFetching: true,
        hasFetched: false
      });
    case FETCH_NORRIS_SUCCEEDED:
      return Object.assign({}, state, {
        isFetching: false,
        hasFetched: true,
        categorias: action.categorias
      });
    case FETCH_NORRIS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        hasFetched: true,
        error: action.error
      });
    default:
      return state;
  }
};

export default norrisReducer;
