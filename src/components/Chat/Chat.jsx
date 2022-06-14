import React, { useContext, useState, useCallback, useLayoutEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../../index.js';
import { messagesSubscriptionQuery } from '../../utils/firestoreQueries.js';
import { StyledChatWrapper, StyledChatHeader, StyledChatContainer, StyledPlaceholder, StyledMessagesContainer, StyledTextArea } from './Chat.styles';
import { activeChatSelector } from '../../redux/selectors/chatsSelectors.js';
import { addMessage } from '../../utils/firestoreQueries.js';
import { Message } from '../Message/Message.jsx';

export const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const activeChat = useSelector(activeChatSelector);
  const [inputValue, setInputValue] = useState('');
  const [messages] = useCollectionData(
    messagesSubscriptionQuery(firestore, activeChat)
  );
  const messageContainerRef = useRef(null);

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, [setInputValue]);

  const handleSendMessage = useCallback(async () => {
    if (inputValue) {
      const message = {
        authorEmail: user.email,
        authorId: user.uid,
        authorName: user.displayName,
        chatId: activeChat,
        message: inputValue.trim(),
        createdAt: Date.now()
      };

      await addMessage(firestore, message, uuidv4());

      setInputValue('');
    }
  }, [inputValue, setInputValue, firestore, uuidv4]);

  useLayoutEffect(() => {
    const element = messageContainerRef.current;

    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  return (
    <StyledChatWrapper>
      <StyledChatHeader>
        Messages
      </StyledChatHeader>
      <StyledChatContainer>
        {
          activeChat ?
            <>
              <StyledMessagesContainer ref={messageContainerRef}>
                {
                  (messages && messages.length) ?
                    messages.map(({ authorId, message, createdAt }) => {
                      return <Message key={`${createdAt}`} message={message} isOwned={authorId === user.uid} />;
                    }) :
                    <StyledPlaceholder>Mo messages for now</StyledPlaceholder>
                }
              </StyledMessagesContainer>
              <StyledTextArea
                maxRows={4}
                minRows={4}
                resize="none"
                placeholder="Print your message here"
                value={inputValue}
                onChange={handleChange}
              />
              <Button variant="contained" color="success" onClick={handleSendMessage}>Send</Button>
            </> :
            <StyledPlaceholder>Select chat to start dialog</StyledPlaceholder>
        }
      </StyledChatContainer>
    </StyledChatWrapper>
  );
};