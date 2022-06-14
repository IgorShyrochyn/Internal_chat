import React, { createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Provider } from 'react-redux';
import { getAuth } from 'firebase/auth';
import ReactDom from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import store from './redux/store.js'
import './index.css';
import { App } from './App.jsx';

const app = initializeApp({
  apiKey: "AIzaSyDGYmun7w9qYPtksUpQIbZdzP9iwQ7He2c",
  authDomain: "internal-chat-74010.firebaseapp.com",
  projectId: "internal-chat-74010",
  storageBucket: "internal-chat-74010.appspot.com",
  messagingSenderId: "1007003258590",
  appId: "1:1007003258590:web:422a37ef7f80544ccc7c4f",
  measurementId: "G-7TE7RMK2ZY"
});

export const Context = createContext(null);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ firestore: getFirestore(app), auth: getAuth(app) }}>
    <ThemeProvider theme={createTheme()}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Context.Provider>
);
