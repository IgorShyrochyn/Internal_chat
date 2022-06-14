import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';

export const StyledChatWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 2rem;
`;

export const StyledChatHeader = styled.h4`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.grey[600]};
`;

export const StyledChatContainer = styled.div`
  height: 70vh;
  border: 1px solid blue;
  border-radius: 5px;
  overflow-y: auto;
  margin-top: 2rem;
  padding: 1rem;
`;

export const StyledPlaceholder = styled.h5`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.grey[500]};

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMessagesContainer = styled.div`
  height: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;

export const StyledTextArea = styled(TextareaAutosize)`
  resize: none;
  border: 2px solid blue;
  border-radius: 4px;
  color: #444;
  width: 100%;
  margin: 2rem 0 1rem 0;
  padding: 1rem;
`;
