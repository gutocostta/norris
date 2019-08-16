import { combineReducers } from "redux";

import norris from "./norris";
import norrisDetalhe from "./norrisDetalhe";


const combinedReducers = combineReducers({
  norris,
  norrisDetalhe
});

export default combinedReducers;
