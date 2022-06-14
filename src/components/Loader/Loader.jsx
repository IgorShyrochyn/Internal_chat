import React from 'react';
import { Grid } from '@mui/material';
import { PageContainer } from '../../components/PageContainer/PageContainer.jsx';
import { StyledLoader } from './Loader.styles.js';

export const Loader = () => {
  return (
    <PageContainer>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          alignItems="center"
          direction="column"
        >
          <StyledLoader />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
