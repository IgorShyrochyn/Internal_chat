import store from '../store';

export const isContactsModalOpenSelector = () => store.getState().modals.isContactsModalOpen;
