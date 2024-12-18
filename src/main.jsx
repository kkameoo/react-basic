import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './04-create-component/App.jsx'
// import App from "./05-props/App.jsx";
// import App from "./06-events/App.jsx";
// import App from "./07-state/App.jsx";
// import App from "./08-create/App.jsx";
import App from "./09-update-and-delete/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
