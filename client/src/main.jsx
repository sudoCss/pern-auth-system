import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./HOCs/ContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </ContextProvider>
);
