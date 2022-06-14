import styled from '@emotion/styled';

export const StyledMessage = styled.div`
  max-width: 60%;
  border-radius: 5px;
  align-self: ${({ isOwned }) => isOwned ? 'flex-end' : 'flex-start'};
  word-wrap: break-word;
  margin-bottom: 1rem;
  padding: 1rem;
  display: inline-block;
  color: #fff;
  background-color: ${({ isOwned }) => isOwned ? '#444' : 'blue'};
`;
