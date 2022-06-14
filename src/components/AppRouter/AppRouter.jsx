import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index.js';
import { LoginPage } from '../../pages/LoginPage/LoginPage.jsx';
import { ChatPage } from '../../pages/ChatPage/ChatPage.jsx';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../utils/consts';

export const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    user ?
      (
        <Routes>
          <Route path={CHAT_ROUTE} element={<ChatPage />} />
          <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
      ) :
      (
        <Routes>
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
        </Routes>
      )
  );
};
