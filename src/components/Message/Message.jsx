import React from 'react';
import { StyledMessage } from './Message.styles.js';

export const Message = ({ message, isOwned }) => {
  return (
    <StyledMessage isOwned={isOwned}>
      {message}
    </StyledMessage>
  );
};
