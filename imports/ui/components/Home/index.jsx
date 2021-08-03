import React from 'react';

//Components
import { Dashboard } from './Dashboard';
import { Interface } from './Interface';

//Styles
import { Container, MediaDiv } from './styles';

export const Home = () => {

  return (
    <Container>
      <MediaDiv>
        <Dashboard />
      </MediaDiv>
      <Interface />
    </Container>
  )
}