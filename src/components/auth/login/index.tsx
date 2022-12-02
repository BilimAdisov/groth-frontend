import { Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

export const LoginPage = () => {
  return (
    <div>
        <Typography
        fontFamily='Open Sans'
        textAlign='center'
        variant='h4'
        component='h2'
        sx={{
            color: '#2B2B2B',
            margin: '20px 0 32px 0'
        }}
        >
            Войдите в свой аккаунт 
        </Typography>
        <TextField
        margin='normal'
        fullWidth={true}
        id='standard-basic'
        label='E-mail'
        variant='outlined'
        />
        <TextField
        margin='normal'
        fullWidth={true}
        id='standard-basic'
        label='Password'
        variant='outlined'
        type='password'
        />
        <Button sx={{ 
         marginTop: '44px',
         marginBottom: '15px', 
         background: '#000' }}
        fullWidth={true}
        variant='contained'
        >
            Войти
        </Button>
        <Typography
        fontFamily='Open Sans'
        textAlign='center'
        variant='body2'
        component='h2'
        color='#909090'
        >
            Еще не зарегистрирован ?
            <Link 
            style={{ marginLeft: '5px'}} to='/register'
            >
            Создать аккаунт
            </Link>
        </Typography>
    </div>
  )
}
