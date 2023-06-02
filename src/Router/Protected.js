import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  }
  return children
}

ProtectedRoutes.propTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.node
}

export default ProtectedRoutes
