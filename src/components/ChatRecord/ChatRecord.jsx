import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveChat } from '../../redux/reducer/chatsReducer';
import { StyledChatRecord } from './ChatRecord.styles';
import { activeChatSelector } from '../../redux/selectors/chatsSelectors';

export const ChatRecord = ({ chatId, user }) => {
  const dispatch = useDispatch();
  const activeChat = useSelector(activeChatSelector);

  const handleClick = useCallback(() => {
    dispatch(setActiveChat(chatId));
  }, [dispatch]);

  return (
    <StyledChatRecord onClick={handleClick} isActive={activeChat === chatId}>
      <div>{user.displayName}</div>
      <span>{user.email}</span>
    </StyledChatRecord>
  );
};