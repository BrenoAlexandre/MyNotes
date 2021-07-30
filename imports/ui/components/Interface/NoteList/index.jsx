import React, { useState, useEffect, useRef, useCallback  } from 'react';

import ModalEdit from './ModalEdit';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rounded: {
    overflow: "auto",
    height: "79vh",
  },
}));

const NoteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 0px;
  padding: 20px;
  background-color: #8080807b; 
  @media (max-width: 800px) {
    /* Fazer */
  }
`;

export const NoteList = (props) =>{
  const classes = useStyles();
  const [select, setSelect] = useState([])

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
    setSelect([...select, id])
  }
  const removeArray = (id) => {
    const filter = select.filter(ids => ids != id)
    setSelect(filter); 
  }
  
  const selectHandler = (e) =>{
    if(e.target.checked){
      addArray(e.target.id)
    }else{
      removeArray(e.target.id)
    }
  }
  
  return (
    <NoteBox>
      <Paper className={classes.rounded} >
        <List component='ul'>
          {props.notas.map((nota)=>{
            return (
              <ListItem
                key={nota._id}
                ContainerComponent="li"
                divider={true}
                color="secondary"
                disabled={false}
              >
                <Checkbox
                  id={nota._id}
                  name={nota.note}
                  onChange={selectHandler}
                  color="primary"
                  edge="start"
                  size="medium"
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
                    edge="end"
                    disabled={false}
                  >
                    <DeleteIcon id={nota._id} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </NoteBox>
  )
}