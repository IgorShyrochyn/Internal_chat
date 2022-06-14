import styled from '@emotion/styled';

export const StyledChatsListWrapper = styled.div`
  width: 30%;
  height: 100%;
  margin: 2rem;
`;

export const StyledChatsListHeader = styled.h4`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.grey[600]};
`;

export const StyledChatsContainer = styled.div`
  height: 70vh;
  border: 1px solid blue;
  border-radius: 5px;
  overflow-y: auto;
  margin-top: 2rem;
  padding: 1rem 2rem 1rem 1rem;
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

