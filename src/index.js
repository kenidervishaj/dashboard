import React from "react";
import * as ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
    <ContextProvider> 
      <App/>
    </ContextProvider>, 
    document.getElementById('root')
  ); 