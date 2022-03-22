import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword'
import FormSeparator from './FormSeparator'
import ThirdPartyAuthenticator from './ThirdPartyAuthenticator'

function Form() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName('')
    setPassword('')
  }
  const handleSetUserName = (e) => {
    setUserName(e.target.value)
  }
  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="User Name"
          onChange={handleSetUserName}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handleSetPassword}
        />
        <ForgotPassword />
        <button type="submit">LOG IN</button>
        <FormSeparator />
        <ThirdPartyAuthenticator />
        <span>
          Don't have an account? <span className="sign-up">Sign up</span>
        </span>
      </form>
    </div>
  )
}

export default Form
