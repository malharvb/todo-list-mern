/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { TodoContextProvider } from './context/todoContext';
import { UserContextProvider } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
