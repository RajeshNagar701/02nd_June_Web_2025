import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Mycompo from "./JSX/func_base";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mycompo />
    
    {/* <App /> */}


  </React.StrictMode>
);