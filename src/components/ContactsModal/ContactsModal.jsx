import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../index.js';
import { isContactsModalOpenSelector } from '../../redux/selectors/modalsSelector.js'
import { setIsContactsModalOpen } from '../../redux/reducer/modalsReducer.js';
import { useFetcher } from '../../hooks/useFetcher.js';
import { getAllUsersExcludeCurrent, getUsersByInputExcludeCurrent, addChat, getChatById } from '../../utils/firestoreQueries.js';
import { StyledPlaceholder, StyledTextField } from './ContactsModal.styles.js';
import { generateChatId } from '../../utils/generateChatId.js';

const columns = [
  { field: 'displayName', headerName: 'Name', width: 270 },
  { field: 'email', headerName: 'Email', width: 220 }
];

const Placeholder = () => {
  return (
    <StyledPlaceholder>No Users found</StyledPlaceholder>
  );
};

export const ContactsModal = () => {
  const isOpen = useSelector(isContactsModalOpenSelector);
  const dispatch = useDispatch();
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const { fetcher, loading, result } = useFetcher();
  const [inputValue, setInputValue] = useState('');

  const hangleInputChange = useCallback((e) => {
    setInputValue(e.target.value.trim());
  }, [setInputValue]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    fetcher(getUsersByInputExcludeCurrent, [firestore, user.uid, inputValue]);
  }, [inputValue, firestore, user]);

  const handleClose = useCallback(() => {
    dispatch(setIsContactsModalOpen(false));
  }, [dispatch]);

  const handleUserSelect = useCallback(async ({ row }) => {
    handleClose();
    const chatId = generateChatId(user.uid, row.id);

    const isChatExists = await getChatById(firestore, chatId);

    if (isChatExists) {
      return;
    }

    const chat = {
      chatId,
      createdAt: Date.now(),
      participants: {
        [user.uid]: {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        },
        [row.id]: {
          displayName: row.displayName,
          email: row.email,
          uid: row.id
        }
      }
    };

    await addChat(firestore, chat);
  }, [handleClose, user, firestore]);

  useEffect(() => {
    if (isOpen) {
      fetcher(getAllUsersExcludeCurrent, [firestore, user.uid]);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        Find people to communicate with
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} action="" target="" autoComplete="false">
          <StyledTextField
            id="search-users"
            label="Search with user name or email"
            type="search"
            onChange={hangleInputChange}
            value={inputValue}
          />
        </form>
        <DialogContentText>Choose person to communicate with</DialogContentText>
        <DataGrid
          rows={result ? result.map(({ displayName, email, uid }) => ({ displayName, email, id: uid })) : []}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          style={{
            width: 500,
            height: 300
          }}
          onRowClick={handleUserSelect}
          components={{
            NoRowsOverlay: Placeholder
          }}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
};
