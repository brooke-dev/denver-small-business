import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

// Below is the update from React 17 to 18. 
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
