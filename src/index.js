import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store, { presistor } from './Redux/store';
import history from './Components/History/History';
import ModalManager from './Components/ModalManager/ModalManager';
import {PersistGate} from 'redux-persist/integration/react'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <Router history = {history}>

<Provider store={store}>
  
  <PersistGate persistor = {presistor}>

  <ModalManager/>
  <App/>
  
  </PersistGate>

</Provider>
  
    </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
