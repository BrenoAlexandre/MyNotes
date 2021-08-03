import React from 'react';

//Styles
import { GlobalStyle } from './GlobalStyle';

//Components
import Rotas from './routes'
  
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Rotas />
    </>
  );
};
