import React, { useState } from 'react';

//Meteor e mongo
import { useTracker } from 'meteor/react-meteor-data';
import { Anotacoes } from '../../../../api/links';

//Components
import ModalCreate from '../Dashboard/ModalCreate';
import { NoteList } from './NoteList';
import { Appbar } from './Appbar';

//styles
import { Container, Header, MediaDiv } from './styles';

export const Interface = () =>{
  const [selectedNotes, setSelectedNotes] = useState([])
  
  const notes = useTracker(() => {
    Meteor.subscribe('todasNotas')    
    return Anotacoes.find().fetch();
  });
  
  const array = (selected) => {
    setSelectedNotes(selected)
  }

  return(
    <Container>
      <Header>
        <Appbar selected={selectedNotes} />
      </Header>
      <MediaDiv>
        <ModalCreate />
      </MediaDiv>
      <NoteList notas={notes} onCheck={array}/>
    </Container>
  )
}