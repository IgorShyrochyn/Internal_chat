import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const StyledLoginPageContainer = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  height: 50%;
  position: absolute;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h4 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
    font-family: ${({ theme }) => theme.typography.h4.fontFamily};
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
