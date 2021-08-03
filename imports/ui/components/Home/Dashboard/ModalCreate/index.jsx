import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ['@media(max-width: 650px)']: {
      display: 'flex',
      flexDirection: 'column',
      width: '70%',
    }
  },
}));

export default function ModalCreate() {
  const today = new Date().toISOString().split('T')[0]
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [nota,setNota] = useState({note: '', date: ''})

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const newNoteHandler = event =>{
    event.preventDefault();
    setNota({
      note: event.target[0].value,
      date: event.target[2].value
    })
    Meteor.call('newNote', nota, ()=>{})
    handleClose()
    resetInputs()
  }
  const resetInputs = () =>{
    setNota({note: '', date: ''})
  }

  const body = (
    <div className={classes.paper}>
      <Typography variant='subtitle1'>Criar nova nota</Typography>
      <form onSubmit={newNoteHandler}>
        <TextField
          required
          name='nota'
          value={nota.note}
          onChange={(event) => {
            setNota({ 
              note: event.target.value, 
              date: nota.date 
            })
          }}
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          label='Nota'
          margin='normal'
          fullWidth
        />
        <TextField
          type='date'
          name='data'
          value={nota.date}
          onChange={(event) => {
            setNota({ 
              note: nota.note, 
              date: event.target.value 
            })
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: today }} 
          variant='outlined'
          label='Concluir até:'
          margin='normal'
          fullWidth
        />
        <Button type='submit' color='primary' variant='contained' fullWidth>
          Salvar nota
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        size='large'
        color='primary'
        variant='contained'
        fullWidth
      >
        Nova nota
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}

