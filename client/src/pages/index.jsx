import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

import Nav from '@components/Nav'

import Blog from '@pages/Blog'
import Admin from '@pages/Admin'
import Login from '@pages/Login'

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

    if (routes[page] && routes[page].requiresAuth && token) {
        return <div><h1>Unauthorized</h1><a href='/#/login' onClick={() => navigate('/login')}>Please login</a></div>
    }

    CurrentPage = routes[page].component

    return (
        <div>
          <Nav />
          <CurrentPage />
        </div>
      )
}

export default Pages
