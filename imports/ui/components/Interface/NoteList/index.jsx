import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
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

export const NoteList = (props) =>{
  const classes = useStyles();

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

  delOneHandler = (event) => {
    let id = event.target.nearestViewportElement.id
    console.log(event.target.nearestViewportElement.id)
    Meteor.call('deleteNote', id, ()=>{})
  }

  return (
    <NoteBox>
      <Paper className={classes.rounded} >
        <List component='ul'>
          {props.props.map(({_id, note, date})=>{
            return (
              <ListItem
                key={_id}
                ContainerComponent="li"
                divider={true}
                color="secondary"
                disabled={false}
              >
                <Checkbox color="primary" edge="start" size="medium" />
                <ListItemText
                  primary={note}
                  secondary={`Concluir até: ${date}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="start" disabled={false}>
                    <EditIcon />
                  </IconButton>
                  <IconButton id={_id} onClick={delOneHandler} edge='end' disabled={false}>
                    <DeleteIcon id={_id} />
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