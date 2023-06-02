import React, { useState } from "react"
import PropTypes from "prop-types"

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login: (token) => {},
  logout: () => {}
})

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null)

  const userIsLoggedIn = !!token

  const loginHandler = (token) => {
    setToken(token)
    console.log(token)
  }
  const logoutHandler = () => {
    setToken(null)
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.node
}

export default AuthContext
