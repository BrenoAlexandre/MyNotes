import React, { useState } from 'react';

//Components
import ModalEdit from './ModalEdit';

//Styles
import { NoteBox } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Checkbox, IconButton, List, 
  ListItem, ListItemSecondaryAction, 
  ListItemText, Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rounded: {
    overflow: 'auto',
    height: '83.1vh',
  },
}))

export const NoteList = (props) =>{
  const classes = useStyles();
  const [selected, setselected] = useState([]);

  deleteOneHandler = (event) => {
    let id = ''
    if(event.target.id == ''){
      id = event.target.parentElement.id
    }else{
      id = event.target.id
    }
    Meteor.call('deleteNote', id, ()=>{})
  }
  const addArray = (id) => {
    setselected([...selected, id])
    props.onCheck([...selected, id])
  }
  const removeArray = (id) => {
    const filter = selected.filter(ids => ids != id)
    setselected(filter); 
    props.onCheck(filter)
  }
  const selectHandler = (event) => {
    if(event.target.checked){
      addArray(event.target.id)
    }else{
      removeArray(event.target.id)
    }
  }
  
  return (
    <NoteBox>
      <Paper className={classes.rounded} >
        <List component='ul'>
          {props.notas.map((nota)=>{
            if(nota.user_id == Meteor.userId() || nota.user_id == null){
            return (
              <ListItem
                key={nota._id}
                id={nota._id}
                ContainerComponent='li'
                divider={true}
                color='secondary'
                disabled={nota.concluded}
              >
                <Checkbox
                  id={nota._id}
                  name={nota.note}
                  onChange={selectHandler}
                  color='primary'
                  edge='start'
                  size='medium'
                  disabled={false}
                />
                <ListItemText
                  primary={nota.note}
                  secondary={`Concluir até: ${nota.date}`}
                />
                <ModalEdit nota={nota} />
                <ListItemSecondaryAction>
                  <IconButton
                    id={nota._id}
                    onClick={deleteOneHandler}
                    edge='end'
                    disabled={false}
                    >
                    <DeleteIcon id={nota._id} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          })}
        </List>
      </Paper>
    </NoteBox>
  )
}