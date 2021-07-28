import React from 'react'

import { User } from './User';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, Typography } from '@material-ui/core';
import ModalCreate from './ModalCreate';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  }
}));

export const Dashboard = () =>{
  const classes = useStyles();

  return(
    <Drawer
      className={classes.drawer}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
    >
      <div>
        <Typography align='center'>Seja Bem-vindo</Typography>
      </div>
      <Divider />
        <User />
      <Divider />
        <ModalCreate></ModalCreate>
    </Drawer>
  );
}