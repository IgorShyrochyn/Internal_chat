import styled from '@emotion/styled';

export const StyledChatRecord = styled.div`
  border-radius: 5px;
  padding: .5rem;
  background-color: ${({ isActive }) => isActive ? 'green' : 'blue'};
  overflow-x: hidden;
  margin-bottom: 1rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }

  div {
    font-weight: bold;
    font-size: 1.1rem;
  }

  span {
    font-size: .8rem;
  }
`;
