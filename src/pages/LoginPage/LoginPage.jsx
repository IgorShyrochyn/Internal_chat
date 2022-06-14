import React, { useCallback, useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@mui/material'
import { Context } from '../../index.js';
import { PageContainer } from '../../components/PageContainer/PageContainer.jsx';
import { StyledLoginPageContainer } from './LoginPage.styles.js';
import { getUserById, addUser } from '../../utils/firestoreQueries.js';

export const LoginPage = () => {
  const { auth, firestore } = useContext(Context)

  const login = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    if (user) {
      const result = await getUserById(firestore, user.uid);

      if (result) {
        return;
      }

      await addUser(firestore, user);
    }
  }, [auth, firestore]);

  return (
    <PageContainer>
      <StyledLoginPageContainer>
        <h4>
          Stay in touch with your folks using fast and simple internal chat
        </h4>
        <Button onClick={login} variant="contained" color="success">ENTER WITH GOOGLE ACCOUNT</Button>
      </StyledLoginPageContainer>
    </PageContainer>
  );
}