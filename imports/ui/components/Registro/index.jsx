import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'

//Meteor
import { Accounts } from 'meteor/accounts-base'

//Styles
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import MaterialLink from '@material-ui/core/Link'
import { Container, CustomSpacer } from './styles'

export const Registro = () => {  
  const history = useHistory();
  const [erroSenha, setErroSenha] = useState({valido: true, texto: ''})
  const [erroNome, setErroNome] = useState({valido: true, texto: ''})

  const registrar = (event) => {
    event.preventDefault();
    const nome = event.target[0].value;
    const senha = event.target[2].value;
    const confSenha = event.target[4].value;
    if(senha!==confSenha){
      setErroSenha({valido: false, texto: 'Verifique sua senha'})
      setErroNome({valido: true, texto: ''})
      return
    }else{
      setErroSenha({valido: true, texto: ''})
      Accounts.createUser(
        {username: nome, password: senha},
        error =>{
          if (error) {
            setErroNome({valido:false, texto: 'Username já está sendo usado.'})
            console.log(error);
          }else{
            setErroNome({valido: true, texto: ''})
            history.push('/')
          }
        }
      )
    }
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography align='center' variant='h4' color='primary'>
            Minhas Tarefas
          </Typography>
          <Typography align='center' variant='subtitle1' color='primary'>
            Preencha os campos abaixo:
          </Typography>
          <form onSubmit={registrar}>
            <TextField
              label='Nome de usuário'
              margin='normal'
              variant='outlined'
              error={!erroNome.valido}
              helperText={erroNome.texto}
              required
              fullWidth
            />
            <TextField
              type='password'
              label='Senha'
              margin='normal'
              variant='outlined'
              required
              fullWidth
            />
            <TextField
              type='password'
              label='Confirmar senha'
              margin='normal'
              variant='outlined'
              error={!erroSenha.valido}
              helperText={erroSenha.texto}
              required
              fullWidth
            />
            <Button type='submit' size='large' variant='contained' color='primary' fullWidth>
              Registrar-se
            </Button>
            <CustomSpacer />
            <Typography align='center' variant='subtitle2'>
              Já possui uma conta?
            </Typography>
            <Typography align='center' variant='subtitle2'>
              <MaterialLink color='primary' href='#/' underline='none'>
                Faça login aqui.
              </MaterialLink>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}