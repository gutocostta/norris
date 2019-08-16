import { getUsuario } from '../services/usuarioService';
import * as ActionTypes from './actionTypes';

const fetchUsuarioStarted = user => ({
  type: ActionTypes.FETCH_USUARIO_STARTED
});

const fetchUsuarioSucceeded = usuario => ({
  type: ActionTypes.FETCH_USUARIO_SUCCEEDED,
  usuario
});

const fetchUsuarioFailed = error => ({
  type: ActionTypes.FETCH_USUARIO_FAILED,
  error
});

export const fetchUsuario = () => dispatch => {
  dispatch(fetchUsuarioStarted());

  getUsuario()
    .then(response => {
      dispatch(fetchUsuarioSucceeded(response.data));
    })
    .catch(error => {
      dispatch(fetchUsuarioFailed());
    });
};
