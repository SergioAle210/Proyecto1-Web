import React, { useState } from 'react'
import { md5 } from 'js-md5'
import useNavigate from '@hooks/useNavigate'
import useToken from '@hooks/useToken'

import Input from '@components/Input'
import Button from '@components/Button'

import './Login.css'

const Login = () => {
  const [user, setUsername] = useState()
  const [password, setPassword] = useState()
  const { setToken } = useToken()
  const { navigate } = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const setValue = (name, value) => {
    switch
    (name) {
      case 'username':
        setUsername(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  const handleLogin = async () => {
    const body = { user, password: md5(password) }
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('http://127.0.0.1:21122/login', fetchOptions)
    const data = await response.json()

    if (response.ok) {
      setToken(data.access_token)
      console.log('Token set successfully, navigating to admin.')
      navigate('/admin')
    } else {
      console.error('Login failed:', data)
      setErrorMessage('Incorrect user or password')
    }
  }

  return (
    <aside className="login">
      <h1 className="title">Welcome!</h1>
      {
        errorMessage !== ''
          ? (
          <div className='error-message' onClick={() => setErrorMessage('')}>
                {errorMessage}
              </div>
            )
          : null
      }
      <Input label="Username" type="text" value={user} onChange={(value) => setValue('username', value)} />
      <Input label="Password" type="password" value={password} onChange={(value) => setValue('password', value)} />
      <Button text="Login" onClick={handleLogin} />
    </aside>
  )
}

export default Login
