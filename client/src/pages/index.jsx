import PropTypes from 'prop-types'
import React from 'react'

import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

import Nav from '@components/Nav'

import Blog from '@pages/Blog'
import Admin from '@pages/Admin'
import Login from '@pages/Login'

import './index.css'

const routes = {
  '/': {
    component: Blog,
    requiresAuth: false
  },
  '/admin': {
    component: Admin,
    requiresAuth: true
  },
  '/login': {
    component: Login,
    requiresAuth: false
  }
}

const Pages = () => {
  const { token } = useToken()
  const { page, navigate } = useNavigate()

  let CurrentPage = () => <h1>404</h1>

  if (routes[page] && routes[page].requiresAuth && !token) {
    return (
      <div className='Unauthorized'>
        <h1 className='titleUnauthorized'
        >
          Unauthorized
        </h1>
        <a
          className='loginUnauthorized'
          href='/#login'
          onClick={() => navigate('/login')}
        >
          Please login
        </a>
      </div>
    )
  }

  CurrentPage = routes[page].component

  return (
    <div>
      <Nav />
      <CurrentPage />
    </div>
  )
}

Pages.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func
}

export default Pages
