import React from 'react'

//Meteor
import { Meteor } from 'meteor/meteor'

//Components
import { User } from './User'
import ModalCreate from './ModalCreate'

//styles
import { makeStyles } from '@material-ui/core/styles'
import { Button, Divider, Drawer, Typography } from '@material-ui/core'
import { CustomSpacer } from './styles'

const drawerWidth = 240
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
  },
}))

export const Dashboard = () =>{
  const classes = useStyles()

  return(
    <Drawer
      className={classes.drawer}
      anchor='left'
      classes={{
        paper: classes.drawerPaper,
      }}
      variant='permanent'
    >
      <div>
        <Typography align='center'>Seja Bem-vindo</Typography>
      </div>
      <Divider />
      <CustomSpacer />
        <User />
      <Divider />
        <CustomSpacer />
        <ModalCreate />
        <CustomSpacer />
        <Button href='#/' onClick={()=>{Meteor.logout()}} color='default' size='large' variant='contained' >Logout</Button>
    </Drawer>
  )
}