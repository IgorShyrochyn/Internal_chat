import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../index.js';
import { chatsListSubscriptionQuery } from '../../utils/firestoreQueries.js';
import { StyledChatsListWrapper, StyledChatsListHeader, StyledChatsContainer, StyledPlaceholder } from './ChatsList.styles';
import { ChatRecord } from '../ChatRecord/ChatRecord.jsx';

export const ChatsList = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [chats, loading] = useCollectionData(
    chatsListSubscriptionQuery(firestore, user.uid)
  );
  
  useEffect(() => console.log({ chats, loading }), [chats, loading]);

  return (
    <StyledChatsListWrapper>
      <StyledChatsListHeader>
        Chats List
      </StyledChatsListHeader>
      <StyledChatsContainer>
        {
          (chats && chats.length) ?
             chats.map(({ chatId, participants }) => {
              const userId = Object.keys(participants).filter(id => id !== user.uid);
              const targetUser = participants[userId];

              return <ChatRecord key={chatId} user={targetUser} chatId={chatId} />
             }) :
             <StyledPlaceholder>No available chats</StyledPlaceholder>
        }
      </StyledChatsContainer>
    </StyledChatsListWrapper>
  );
};
