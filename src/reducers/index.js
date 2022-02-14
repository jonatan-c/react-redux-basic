import contadorReducer from "./contadorReducer";
import { combineReducers } from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { crudReducer } from "./crudReducer";

const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
});

export default reducer;
