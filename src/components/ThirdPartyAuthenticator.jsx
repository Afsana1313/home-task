import React from 'react'
import facebooklogo from '../assets/facebook-logo.png'
import googlelogo from '../assets/google-logo.png'

function ThirdPartyAuthenticator() {
  return (
    <div className="third-party-authenticator-container">
      <img src={facebooklogo} alt="Facebook" />
      <img src={googlelogo} alt="Google" />
    </div>
  )
}

export default ThirdPartyAuthenticator
