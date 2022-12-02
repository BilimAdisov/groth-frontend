import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <>
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
            Создать аккаунт 
        </Typography>
        <TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Name'
				variant='outlined'
				type='text'
			/>
        <TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='E-mail'
				variant='outlined'
				type='email'
			/>
        <TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Passwword'
				variant='outlined'
				type='password'
			/>
        <TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='password on more time'
				variant='outlined'
				type='password'
			/>
        <Button
        sx={{
            marginTop: '44px',
            marginBottom: '15px',
            background: '#000',
            fontFamily: 'Open Sans',
        }}
        fullWidth={true}
        variant='contained'
        >
            Зарегистрироваться
        </Button>
        <Typography
        textAlign='center'
        variant='body2'
        component='h2'
        color='#909090'
			>
				У вас уже есть аккаунт?
				<Link style={{ marginLeft: '5px' }} to='/login'>
					Войти
				</Link>
			</Typography>
    </>
  )
}
