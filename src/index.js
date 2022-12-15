import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';


import App from './components/App/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUy_JXEOyf9HIN2yR_DTkfmxLa_FwQJNQ",
  authDomain: "rickandmorty-4928a.firebaseapp.com",
  databaseURL: "https://rickandmorty-4928a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rickandmorty-4928a",
  storageBucket: "rickandmorty-4928a.appspot.com",
  messagingSenderId: "407562879008",
  appId: "1:407562879008:web:c28f20432119172c043c45",
  measurementId: "G-R5MJW79XSL"
};

const app = initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

