import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import md5 from 'js-md5'

import Input from '@components/Input'
import Button from '@components/Button'

const Login = () => {
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const setValue = (name, value) => {
    switch(name) {
      case 'username':
        setUsername(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  const handleLogin = async () => {
    const hashedPassword = md5(password)
    const response = await fetch('http://127.0.0.1:21122/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, password: hashedPassword })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('isAuth', true)
      window.dispatchEvent(new Event('storage'))
      navigate('/admin')
    } else {
      alert(data.message)
    }
  }

  return (
    <div>
        <Input label="Username" type="text" value={user} onChange={(value) => setValue('username', value)} />
        <Input label="Password" type="password" value={password} onChange={(value) => setValue('password', value)}/>
        <Button text={'Login'} onClick={handleLogin} />
    </div>
  )
}

export default Login
