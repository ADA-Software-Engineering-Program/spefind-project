import PropTypes from "prop-types"
import styles from "./Logout.module.css"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Logout = ({ children, classes }) => {
  const navigate = useNavigate()
  const logoutHandler = () => {
    sessionStorage.removeItem("token")
    navigate("/login")
    toast.success(`Log out successful!`, {
      duration: 4000,
      position: "top-center",

      // Styling
      style: { fontSize: "13px" },
      className: ""
    })
  }

  return (
    <button className={`${styles.button} ${classes}`} onClick={logoutHandler}>
      Logout
      {children}
    </button>
  )
}

Logout.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string
}

export default Logout
