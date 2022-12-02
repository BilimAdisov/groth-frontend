import React from 'react'

import style from './style.module.scss'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { RegisterPage } from './register'
import { LoginPage } from './login'

export const AuthRootComponent = () => {
    const location = useLocation()
  return (
    <>
    <div className={style.root}>
        <form >
        <Box
        width={600}
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        boxShadow='5px 5px 10px #ccc'
        borderRadius='3px'
        padding='5px'
        >
            {
                location.pathname === '/register' ? (
                    <RegisterPage/>
                )
                :
                location.pathname === '/login' ? (
                    <LoginPage/>
                )
                :
                null
            }
        </Box>
        </form>
    </div>
    </>
  )
}
