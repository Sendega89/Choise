import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/style.scss";
import "./assets/fonts/stylesheet.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ProSidebarProvider} from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProSidebarProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ProSidebarProvider>


  </React.StrictMode>
);

reportWebVitals();
