import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import PropTypes from "prop-types"

export default function AppLayout({ children, backgroundColor }) {
  return (
    <div>
      <Navbar backgroundColor={backgroundColor} />
      {children}
      <Footer />
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}
