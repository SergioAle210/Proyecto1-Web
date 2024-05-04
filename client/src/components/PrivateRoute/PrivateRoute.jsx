import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuth')
  return isAuthenticated ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute