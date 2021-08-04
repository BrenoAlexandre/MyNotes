import React, { useState } from 'react';

import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Modal, 
  Switch, Button, 
  TextField, Typography, 
  IconButton, FormControlLabel 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    ['@media(max-width: 650px)']: {
      display: 'flex',
      flexDirection: 'column',
      width: '70%',
    }
  },
}))

export default function ModalEdit(props) {
  const classes = useStyles();
  const [id] = useState(props.nota._id);
  const [open, setOpen] = useState(false);
  const [nota,setNota] = useState({note: props.nota.note, date: props.nota.date, concluded: props.nota.concluded})
  
  const today = new Date().toISOString().split('T')[0];
  
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    resetInputs();
  }

  const editHandler = event =>{
    event.preventDefault();
    console.log(nota);
    Meteor.call('editNote', id, nota, ()=>{})
    handleClose()
  }

  const resetInputs = () => {
    setNota({
      note: props.nota.note, 
      date: props.nota.date,
      concluded: props.nota.concluded
    });
    setOpen(false);
  }

  const body = (
    <div className={classes.paper}>
      <Typography variant='subtitle1'>Editar tarefa</Typography>
      <form onSubmit={editHandler}>
        <TextField
          required
          name='nota'
          value={nota.note}
          onChange={(event) => {
            setNota({
              note: event.target.value,
              date: props.nota.date,
              concluded: props.nota.concluded
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
              note: props.nota.note,
              date: event.target.value,
              concluded: props.nota.concluded
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
        <FormControlLabel
          control={
            <Switch
              checked={nota.concluded}
              onChange={(event) => {
                setNota({
                  note: props.nota.note,
                  date: props.nota.date,
                  concluded: event.target.checked
                })
              }}
              color='primary'
            />
          }
          label='Concluido'
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button
              type='submit'
              color='primary'
              size='large'
              variant='contained'
              fullWidth
            >
              Salvar tarefa
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={resetInputs}
              size='large'
              variant='contained'
              fullWidth
            >
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleOpen} disabled={false}>
        <EditIcon/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

