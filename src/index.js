import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from "@fortawesome/free-solid-svg-icons";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

library.add(fa.faShoppingBasket, fa.faLeaf, fa.faPlusCircle, fa.faMinusCircle, fa.faTrashAlt);

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
