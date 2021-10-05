import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import Char from "./Components/detailChar";

import Tests from "./Components/characters";
import store from "./redux/store";
const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Tests} exact />

            <Route path="/character" component={Char} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
