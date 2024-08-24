import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";
import { firebaseConfig } from "./config.ts";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

console.log("hello here!", app);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
