import React from 'react';
import { StyledContainer } from './PageContainer.styles';

export const PageContainer = ({ children }) => {
  return (
    <StyledContainer maxWidth="lg" color='primary'>
      {children}
    </StyledContainer>
  );
}
