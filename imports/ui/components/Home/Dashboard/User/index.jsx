import React from 'react';

import { Typography } from '@material-ui/core';
import { AvatarWrapper, UserAvatar } from './styles';

export const User = () =>{
  return(
      <AvatarWrapper>
        <UserAvatar src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fdownload_258083.png&f=1&nofb=1'/>
        <Typography align='center' variant='h5' component='h1'>Usuário</Typography>
      </AvatarWrapper>
  )
}
