import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageContainer } from '../../components/PageContainer/PageContainer.jsx';
import { ChatsList } from '../../components/ChatsList/ChatsList.jsx';
import { Chat } from '../../components/Chat/Chat.jsx';
import { setActiveChat } from '../../redux/reducer/chatsReducer.js';
import { StyledWrapper } from './ChatPage.styles.js';

export const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setActiveChat(null));
    };
  }, []);

  return (
    <PageContainer>
      <StyledWrapper>
      <ChatsList />
      <Chat />
      </StyledWrapper>
    </PageContainer>
  );
}