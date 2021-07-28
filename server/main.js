import { Meteor } from 'meteor/meteor';
import { Anotacoes } from '../imports/api/links';

Meteor.methods({
  newNote(nota) {
    Anotacoes.insert({
      note: nota.note,
      date: nota.date
    })
  },
  deleteNote(id) {
    Anotacoes.remove({_id: id})
  },
  editNota(id, novanota){
    Anotacoes.update(
      {_id: id}, 
      {$set: {note: novanota}}
    )
  }
})

Meteor.publish("todasNotas", function(){
  return Anotacoes.find();
})

