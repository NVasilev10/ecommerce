import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import "./admin-global.css";
import "./admin-components.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
