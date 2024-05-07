import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const NavigationContext = createContext({ page: '/', navigate: () => {} })

const NavigationProvider = ({ children }) => {
  const path = window.location.hash.substring(1)
  const [page, setPage] = useState(path || '/')

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.substring(1) || '/'
      setPage(newPath)
    }

    window.addEventListener('hashchange', handleHashChange)

    // Inicializar la página basada en el hash actual al cargar
    handleHashChange()

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [path])

  const navigate = (navigateTo) => {
    console.log('Navigating to', navigateTo)
    setPage(navigateTo)
    window.location.hash = navigateTo
  }

  return (
    <NavigationContext.Provider value={{ page, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigate = () => {
  return useContext(NavigationContext)
}

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default useNavigate
export { NavigationProvider }
