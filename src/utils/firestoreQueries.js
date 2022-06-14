import { collection, query, where, getDocs, getDoc, setDoc, doc, orderBy } from 'firebase/firestore';

export const getUserById = async (db, uid) => {
  const result = await getDoc(doc(db, 'users', uid));

  if (result.exists()) {
    return result.data();
  }
};

export const getChatById = async (db, id) => {
  const result = await getDoc(doc(db, 'chats', id));

  if (result.exists()) {
    return result.data();
  }
};

export const addUser = async (db, user) => {
  const result = await setDoc(doc(db, 'users', user.uid), { displayName: user.displayName, email: user.email, uid: user.uid });

  return result;
};

export const addChat = async (db, chat) => {
  const result = await setDoc(doc(db, 'chats', chat.chatId), chat);

  return result;
};

export const getAllUsersExcludeCurrent = async (db, uid) => {
  const result = await getDocs(query(collection(db, 'users'), where('uid', '!=', uid)));

  if (result && result.docs && result.docs.length) {
    return result.docs.map(doc => doc.data());
  }
};

export const getUsersByInputExcludeCurrent = async (db, uid, input) => {
  const result = await getDocs(query(collection(db, 'users'), where('uid', '!=', uid)));

  if (result && result.docs && result.docs.length) {
    if (!input) {
      return result.docs.map(doc => doc.data());
    }

    const lowercasedInput = input.toLowerCase();
    // REASON: Firestore doesn't support partial string match queries
    return result.docs
      .map(doc => doc.data())
      .filter(
        ({ displayName, email }) => displayName.toLowerCase().includes(lowercasedInput) || email.toLowerCase().includes(lowercasedInput)
      );
  }
};

export const chatsListSubscriptionQuery = (db, uid) => {
  return query(collection(db, 'chats'), where(`participants.${uid}.uid`, '==', uid));
};

export const addMessage = async (db, message, id) => {
  const result = await setDoc(doc(db, 'messages', id), message);

  return result;
};

export const messagesSubscriptionQuery = (db, chatId) => {
  return query(collection(db, 'messages'), where('chatId', '==', chatId), orderBy('createdAt', 'asc'));
};
