import store from './store';
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

async function enableMocking() {
  if (process.env.REACT_APP_API_MOCKING !== "enabled") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
    </React.StrictMode>
  );
});
