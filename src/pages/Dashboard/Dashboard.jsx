import { useState, useEffect } from "react"
import AppLayout from "../../layout/AppLayout"
import "./Dashboard.css"

import userImg from "./assets/userImg.png"

import { HiOutlineLogout } from "react-icons/hi"

import Logout from "../../Components/Logout/Logout"

import PersonalDetails from "./components/PersonalDetails/PersonalDetails"
import ViewProfile from "./components/ViewProfile/ViewProfile"
import Upgrade from "./components/Upgrade/Upgrade"
import Field from "./components/Field/Field"
import Availability from "./components/Availability/Availability"
import AccountPreferences from "./components/AccountPreferences/AccountPreferences"

import { API_LINK } from "../../utils/api"

const Dashboard = () => {
  const [fetchedUserData, setFetchedUserData] = useState({
    // personal
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    city: "",
    biography: "",
    titleOfEvent: "",
    date: "",
    location: "",
    numberOfAttendees: "",
    field: "",
    // eventPictures: "",

    // niche
    speakerField: "",
    speakerSubField: "",
    education: "",
    jobTitle: "",
    yearsOfPractice: "",
    jobDescription: "",
    position: "",
    language: "",

    // availability
    eventType: [],
    availableTo: [],
    pricing: "",
    isVolunteer: "",

    // isVisible
    isVisible: ""
  })
  const [dashboardBodyContent, setDashboardBodyContent] = useState(<PersonalDetails userData={fetchedUserData} />)
  const [isNavExpanded, setIsNavExpanded] = useState(true)
  const [currentMenu, setCurrentMenu] = useState("menu1")
  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem("token")
      const getUserData = await fetch(`${API_LINK}/api/profile/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      const userData = await getUserData.json()
      console.log(userData)
      setFetchedUserData((prevData) => ({
        ...prevData,
        firstName: userData?.user?.firstName,
        lastName: userData?.user?.lastName,
        country: userData?.user?.country,
        city: userData?.user?.city
      }))
      console.log(userData?.user?.city)
    } catch (error) {
      console.log(error)
    }
  }
  const sideBarTitleAndComponent = [
    {
      id: "menu1",
      text: "Personal Details",
      component: <PersonalDetails userData={fetchedUserData} />
    },
    {
      id: "menu2",
      text: "Field",
      component: <Field />
    },
    {
      id: "menu3",
      text: "Availability & Fees",
      component: <Availability />
    },
    {
      id: "menu4",
      text: "Account Preferences",
      component: <AccountPreferences />
    },
    {
      id: "menu5",
      text: "Notifications",
      component: ""
    },
    {
      id: "menu6",
      text: "Upgrade",
      component: <Upgrade />
    },
    {
      id: "menu7",
      text: "View Profile",
      component: <ViewProfile />
    }
  ]

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <AppLayout>
      <div
        className={isNavExpanded ? "" : "overlay"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      ></div>
      <div className='dashboard'>
        <h3>YOUR DASHBOARD</h3>
        <button
          className='harmburger'
          // setting the isNavExpanded variable to the opposite of whatever it is when users click on the button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='black'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='dashboardContainer'>
          <div className={isNavExpanded ? "sidebar" : "sidebarMobile"}>
            <div>
              <div className='userProfile'>
                <img src={userImg} alt='user profile' />
                <p className='username'>Titilayo</p>
                <p className='userCareer'>Career Speaker</p>
              </div>
              <ul className='userMenu'>
                {sideBarTitleAndComponent.map((menu) => {
                  return (
                    <li
                      className={currentMenu === menu.id ? "span-select" : ""}
                      key={menu.id}
                      onClick={() => {
                        setCurrentMenu(menu.id)
                        setDashboardBodyContent(menu.component)
                        window.scrollTo(90, 90)
                      }}
                    >
                      <span>{menu.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <Logout classes='logout'>
              <HiOutlineLogout className='logoutIcon' />
            </Logout>
          </div>
          <div className='dahsboardBody'>{dashboardBodyContent}</div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard
