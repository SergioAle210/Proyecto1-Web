import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '@components/Button'

import './Nav.css'

function Nav() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuth'))

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('isAuth'))
    }

    // Añadir un evento listener para cambios en localStorage
    window.addEventListener('storage', handleStorageChange)

    // Limpiar el evento listener al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isAuth') // Limpia el estado de autenticación
    setIsAuthenticated(null) // Actualiza el estado de autenticación
    window.location.href = '/' // Redirige al usuario a la página principal
  }

  return (
    <nav>
      <Link to="/">Home</Link> | {" "}
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link> | {" "}
          <Button text={'Logout'} onClick={handleLogout} />
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  )
}

export default Nav
