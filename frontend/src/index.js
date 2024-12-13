import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext";
import CaptainContext from "./context/CaptainContext";
import SocketProvider from "./context/SocketContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CaptainContext>
    <UserContext>
      <SocketProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </SocketProvider>
    </UserContext>
  </CaptainContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
