import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from './index.js';
import { AppRouter } from './components/AppRouter/AppRouter.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Loader } from './components/Loader/Loader.jsx';
import { ContactsModal } from './components/ContactsModal/ContactsModal.jsx';

export const App = () => {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <ContactsModal />
      <BrowserRouter>
        <Navbar />
        {
          loading ?
            <Loader /> :
            <AppRouter />
        }
      </BrowserRouter>
    </>
  );
}
