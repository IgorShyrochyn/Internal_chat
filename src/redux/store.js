import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducer/chatsReducer';
import modalsReducer from './reducer/modalsReducer';

const store = configureStore({
  reducer: {
    chats: chatsReducer,
    modals: modalsReducer
  }
});

export default store;
