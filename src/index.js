import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import TagManager from "react-gtm-module";

const tagManagerArg = {
  gtmId: "GTM-TN42W7W",
};
TagManager.initialize(tagManagerArg);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
