import React from 'react';

import { AppBar, IconButton, ListItem, ListItemSecondaryAction, Toolbar, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `;  

export const Appbar = () =>{

  return(
    <Container>
      <AppBar position="relative">
        <Toolbar variant="regular">        
          <ListItem>
            <Typography variant="h5" color="inherit">
              Minhas notas
            </Typography>
          </ListItem>
          <ListItemSecondaryAction>
            <IconButton edge='start' variant='outlined' disabled={false} color='inherit'>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Toolbar>
      </AppBar>
    </Container>
  )
}