import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, IconButton, Modal, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

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
  },
}));

export default function ModalEdit(props) {
  
  const today = new Date().toISOString().split('T')[0];
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [nota,setNota] = useState({note: props.nota.note, date: props.nota.date});
  const [id] = useState(props.nota._id);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetInputs();
  };

  const editHandler = event =>{
    event.preventDefault();
    setNota({
      note: event.target[0].value,
      date: event.target[2].value
    })
    console.log(nota);
    Meteor.call('editNote', id, nota, ()=>{})
    handleClose()
  }

  const resetInputs = () => {
    setNota({
      note: props.nota.note, 
      date: props.nota.date
    });
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Editar nota</h2>
      <form onSubmit={editHandler}>
        <TextField
          required
          name="nota"
          value={nota.note}
          onChange={(event) => {
            setNota({ 
              note: event.target.value, 
              date: nota.date 
            });
          }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Nota"
          margin="normal"
          fullWidth
        />
        <TextField
          type="date"
          name="data"
          value={nota.date}
          onChange={(event) => {
            setNota({ 
              note: nota.note, 
              date: event.target.value 
            });
          }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: today }} 
          variant="outlined"
          label="Concluir até:"
          margin="normal"
          fullWidth
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button type="submit" color="primary" size='large' variant="contained" fullWidth>
              Salvar nota
            </Button>
          </Grid>
          <Grid item xs={6}>          
            <Button onClick={resetInputs} size='large' variant='contained' fullWidth>
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon/>
      </IconButton>
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

