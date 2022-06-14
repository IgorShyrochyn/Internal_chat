import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChat: null
};
const chatsReducer = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChat = action.payload;
    }
  }
});

export default chatsReducer.reducer;
export const { setActiveChat } = chatsReducer.actions;
