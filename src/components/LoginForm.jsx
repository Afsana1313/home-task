import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Form from './Form'
import logo from '../assets/blue-logo.png'

function LoginForm() {
  const title = 'Explore The Best Tours... Hurry Up!!'
  return (
    <div className="login-form-container">
      <div className="login-form">
        <Logo logo={logo} />
        <Title title={title} />
        <Form />
      </div>
    </div>
  )
}

export default LoginForm
