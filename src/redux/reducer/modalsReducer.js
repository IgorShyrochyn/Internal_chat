import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isContactsModalOpen: false
};
const modalsReducer = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsContactsModalOpen: (state, action) => {
      state.isContactsModalOpen = action.payload;
    },
  }
});

export default modalsReducer.reducer;
export const { setIsContactsModalOpen } = modalsReducer.actions;
