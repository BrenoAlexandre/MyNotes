import React from 'react';

import { Typography } from '@material-ui/core';
import { AvatarWrapper, UserAvatar } from './styles';

export const User = () =>{
  return(
      <AvatarWrapper>
        <UserAvatar src='https://github.com/brenoalexandre.png'/>
        <Typography align='center' variant='h5' component='h1'>{Meteor.user().username}</Typography>
      </AvatarWrapper>
  )
}