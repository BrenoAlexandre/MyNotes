import React from 'react';

//Meteor e mongo
import { useTracker } from 'meteor/react-meteor-data';
import { Anotacoes } from '../../../api/links';

//Styles
import styled from 'styled-components';

//Components
import { NoteList } from './NoteList';
import { Appbar } from './Appbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
`;

export const Interface = () =>{
  const notes = useTracker(() => {
    Meteor.subscribe("todasNotas")    
    return Anotacoes.find().fetch();
  });

  return(
    <>
      <Container>
        <Header>
          <Appbar />
        </Header>
        <NoteList notas={notes}/>
      </Container>
    </>
  )
}