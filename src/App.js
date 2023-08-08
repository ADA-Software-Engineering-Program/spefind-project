import "./App.css"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./Router/Protected"
import Home from "./pages/Home/Home"
import About from "../src/pages/About/About"
import Explore from "./pages/Explore/Explore"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import SignIn from "../src/Components/SignIn/SignIn"
import SignUp from "../src/Components/SignUp/SignUp"
import Register from "./pages/Register/Register"
import EventRegister from "./pages/Register/EventRegister"
import CreateProfile from "./pages/CreateProfile/CreateProfile"
import SpeakerProfile from "./pages/SpeakerProfile/SpeakerProfile"
import Bookme from "./pages/BookMe/Bookme.jsx"
import FAQ from "./pages/FAQ/FAQ"
import Oops from "./pages/Oops/Oops"
import Congratulation from "./pages/Congratulation/Congratulation"
import Congratulation2 from "./pages/Congratulation/Congratulation2"
import Chat from "./pages/Chat/Chat"
import Dashboard from "./pages/Dashboard/Dashboard"
import { ROUTE_NAMES } from "./utils/constants"

function App() {
  function isLoggedIn() {
    const isAuthenticated = !!sessionStorage.getItem("token")
    return isAuthenticated
  }

  return (
    <div className='app'>
      <Routes>
        <Route path={ROUTE_NAMES.HOMEPAGE} element={<Home />} />
        <Route path={ROUTE_NAMES.ABOUT} element={<About />} />
        <Route
          path={ROUTE_NAMES.EXPLORE}
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn()}>
              <Explore />
            </ProtectedRoutes>
          }
        />
        <Route path={ROUTE_NAMES.BLOG} element={<Blog />} />
        <Route path={ROUTE_NAMES.CONTACT} element={<Contact />} />
        <Route path={ROUTE_NAMES.LOGIN} element={<SignIn />} />
        <Route path={ROUTE_NAMES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTE_NAMES.REGISTER} element={<Register />} />
        <Route path={ROUTE_NAMES.EVENT_REGISTER} element={<EventRegister />} />
        <Route
          path={ROUTE_NAMES.CREATE_PROFILE}
          element={
            // <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <CreateProfile />
            // </ProtectedRoutes>
          }
        />
        <Route path={ROUTE_NAMES.SPEAKER_PROFILE} element={<SpeakerProfile />} />
        <Route path={ROUTE_NAMES.BOOKE_ME} element={<Bookme />} />
        <Route path={ROUTE_NAMES.CHAT} element={<Chat />} />
        <Route path={ROUTE_NAMES.FAQ} element={<FAQ />} />
        <Route path={ROUTE_NAMES.OOPS} element={<Oops />} />
        <Route path={ROUTE_NAMES.CONGRATULATION} element={<Congratulation />} />
        <Route path={ROUTE_NAMES.CONGRATULATION2} element={<Congratulation2 />} />
        <Route
          path={ROUTE_NAMES.DASHBOARD}
          element={
            // <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <Dashboard />
            // </ProtectedRoutes>
          }
        />
        <Route
          path={ROUTE_NAMES.NOT_FOUND}
          element={
            // <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <div>This page can not be found</div>
            // </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  )
}

export default App
