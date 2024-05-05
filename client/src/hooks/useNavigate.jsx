import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const NavigationContext = createContext({ page: '/', navigate: () => {} })

const NavigationProvider = ({ children }) => {
  const path = window.location.hash.substring(1)
  const [page, setPage] = useState(path || '/')

  useEffect(() => {
    if (path) {
      setPage(path)
    }
  }, [path])

  const navigate = (navigateTo) => {
    console.log('Navigating to', navigateTo)
    setPage(navigateTo)
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

// eslint-disable-next-line react-refresh/only-export-components
export default useNavigate
export { NavigationProvider }