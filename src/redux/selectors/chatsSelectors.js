import store from '../store';

export const activeChatSelector = () => store.getState().chats.activeChat;
