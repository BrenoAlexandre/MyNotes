import React from 'react';

import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 19px;
  width: 239px;

`;

const UserAvatar = styled.img`
  width: 200px;
  border-radius: 1000px;
`;

export const User = () =>{
  return(
    <>
      <AvatarWrapper>
        <UserAvatar src='http://www.github.com/brenoalexandre.png'/>
        <Typography align='center' variant='h5' component='h1'>Breno Alexandre</Typography>
        <Typography align='center'component='h6'>admin@admin.com</Typography>
      </AvatarWrapper>
    </>
  )
}