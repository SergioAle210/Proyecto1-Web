import useNavigate from '@hooks/useNavigate'
import useToken from '@hooks/useToken'

import React from 'react'

import './Nav.css'

const Nav = () => {
  const { page, navigate } = useNavigate()
  const { isLoggedIn, setToken } = useToken()

  const handleClick = (event, newPath) => {
    event.preventDefault()
    navigate(newPath)
  }

  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem('access_token')
    setToken(null)
    navigate('/login')
  }

  return (
    <nav>
      <ul className="nav-list">
        {isLoggedIn
          ? (
            <>
              <li>
                <a className={page === '/' ? 'active' : ''} href="/" onClick={(e) => handleClick(e, '/')}>Home</a>
              </li>
              <li>
                <a className={page === '/admin' ? 'active' : ''} href="#/admin" onClick={(e) => handleClick(e, '/admin')}>Admin</a>
              </li>
              <li>
                <a onClick={(e) => handleLogout(e)}>Logout</a>
              </li>
            </>
            )
          : (
            <>
              <li>
                <a className={page === '/' ? 'active' : ''} href="/" onClick={(e) => handleClick(e, '/')}>Home</a>
              </li>
              <li>
                <a className={page === '/login' ? 'active' : ''} href="#/login" onClick={(e) => handleClick(e, '/login')}>Login</a>
              </li>
            </>
            )}
      </ul>
    </nav>
  )
}

export default Nav
