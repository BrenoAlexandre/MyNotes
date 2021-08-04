import React from 'react'

import { AppBar, IconButton, ListItem, ListItemSecondaryAction, Toolbar, Typography } from '@material-ui/core'
import ExitToApp from '@material-ui/icons/ExitToApp'
import DeleteIcon from '@material-ui/icons/Delete'
import { Container, MediaDiv } from './styles'

export const Appbar = (props) =>{
  deleteManyHandler = () => {
    setTimeout(()=>{
      props.selected.map(id=>{
        Meteor.call('deleteNote',id, ()=>{});
      })
    }, 200)
    
  }

  return (
    <Container>
      <AppBar position='relative'>
        <Toolbar variant='regular'>
          <MediaDiv>
            <IconButton href='#/' onClick={()=>{Meteor.logout()}} edge='start' variant='outlined' color='inherit' >
              <ExitToApp />
            </IconButton>
          </MediaDiv>
          <ListItem>
            <Typography variant='h5' color='inherit'>
              Minhas tarefas
            </Typography>
          </ListItem>
          <ListItemSecondaryAction>
            <IconButton
              onClick={deleteManyHandler}
              edge='end'
              variant='outlined'
              color='inherit'
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Toolbar>
      </AppBar>
    </Container>
  );
}