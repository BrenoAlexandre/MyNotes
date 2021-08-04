import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

//styles
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core'
import MaterialLink from '@material-ui/core/Link'
import { Container, CustomSpacer } from './styles'

export const Login = () => {
  const history = useHistory()
  const [erro, setErro] = useState({valido: true, texto: ''})

  const login = event =>{
    event.preventDefault();
    let nome = event.target[0].value
    let senha = event.target[2].value
    Meteor.loginWithPassword(nome, senha, error => {
      if (error) {
        console.log(error);
        setErro({valido: false, texto: 'Senha ou nome de usuário incorretos, verifique seus dados.'})
      }else{
        history.push('/home')
      }
    })
  }
  
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography align='center' variant='h4' color='primary'>
            Minhas Tarefas
          </Typography>
          <Typography align='center' variant='subtitle1' color='primary'>
            Entre com seu usuário:
          </Typography>
          <form onSubmit={login}>
            <TextField
              label='Nome de usuário'
              margin='normal'
              variant='outlined'
              error={!erro.valido}
              required
              fullWidth
            />
            <TextField
              type='password'
              label='Senha'
              margin='normal'
              variant='outlined'
              error={!erro.valido}
              helperText={erro.texto}
              required
              fullWidth
            />
            <Button
              type='submit'
              size='large'
              variant='contained'
              color='primary'
              fullWidth
            >
              Entrar
            </Button>
            <CustomSpacer />
            <Typography align='center' variant='subtitle2'>
              Ainda não possui uma conta?
            </Typography>
            <Typography align='center' variant='subtitle2'>
              <MaterialLink color='primary' href='#/registro' underline='none'>
                Cadastre-se aqui.
              </MaterialLink>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}