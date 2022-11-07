import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

import LoginPage from './components/loginPages/loginPage/loginPage';
import PasswordRecovery from './components/loginPages/passwordRecoveryPage/passwordRecoveryPage';
import CreateAccountPage from './components/loginPages/createAccountPage/createAccountPage';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginPage/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

