import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './js/reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './css/style.css';


const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.render(
  <RouterProvider router={router} basename={process.env.PUBLIC_URL} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
