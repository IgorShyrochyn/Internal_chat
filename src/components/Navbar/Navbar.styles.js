import styled from '@emotion/styled';
import { AppBar, Grid } from '@mui/material';

export const StyledNavBar = styled(AppBar)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const StyledUserControls = styled(Grid)`
  button {
    margin-right: 1em;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  line-height: 1.2em;
  margin-right: 1em;
`;
