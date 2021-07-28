import React from 'react';

//Meteor
import { useTracker } from 'meteor/react-meteor-data';
import { Anotacoes } from '../api/links';

//Styles
import { GlobalStyle } from './GlobalStyle';
import styled from 'styled-components';

//Components
import { Dashboard } from './components/Dashboard';
import { Interface } from './components/Interface';

  
  const Container = styled.div`
    display: flex;
    flex-direction: rows;
    height: 100%;
    width: 100% - 240px;
  `;
  
export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Dashboard />
        <Interface />
      </Container>
    </>
  );
};
