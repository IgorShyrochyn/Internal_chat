import React, { useContext, useCallback } from 'react';
import { Toolbar, Container, Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { setIsContactsModalOpen } from '../../redux/reducer/modalsReducer.js';
import { Context } from '../../index.js';
import { StyledNavBar, StyledHeader, StyledUserControls } from './Navbar.styles';

export const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const handleOpenContactsModal = useCallback(() => {
    dispatch(setIsContactsModalOpen(true));
  }, [dispatch]);

  return (
    <StyledNavBar color='primary'>
      <Container maxWidth="lg">
        <Toolbar>
          <StyledHeader>INTERNAL CHAT</StyledHeader>
          <StyledUserControls container justifyContent="flex-end" alignItems="center">
            {
              !!user &&
              <>
                <StyledHeader>
                  {user.displayName}
                </StyledHeader>
                <Button variant="contained" color="success" onClick={handleOpenContactsModal}>Search Contacts</Button>
                <Button variant="contained" onClick={() => auth.signOut()} color="error">Exit</Button>
              </>
            }
          </StyledUserControls>
        </Toolbar>
      </Container>
    </StyledNavBar>
  );
};