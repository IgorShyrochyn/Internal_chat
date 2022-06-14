import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledPlaceholder = styled.h5`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.grey[500]};

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  margin: 20px 0;
  width: 100%;
`;
