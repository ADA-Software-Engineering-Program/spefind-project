import React, { useCallback, useEffect, useState } from "react"
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
import toast from "react-hot-toast"

import { API_LINK } from "../../utils/api"

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false)

  const [fetchedUserData, setFetchedUserData] = useState({})

  const fetchUserHandler = useCallback(async () => {
    setLoading(true)
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
      console.log(getUserData)
      if (!getUserData.ok || !getUserData) {
        setLoading(false)
        toast.error(`${userData?.msg} Please login again!`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      console.log(userData)
      setFetchedUserData(userData.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserHandler()
  }, [fetchUserHandler])

  const [dashboardBodyContent, setDashboardBodyContent] = useState(<PersonalDetails />)
  const [isNavExpanded, setIsNavExpanded] = useState(true)
  const [currentMenu, setCurrentMenu] = useState("menu1")

  const sideBarTitleAndComponent = [
    {
      id: "menu1",
      text: "Personal Details",
      component: <PersonalDetails />
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
                <p className='username'>{fetchedUserData?.firstName}</p>
                <p className='userCareer'>{fetchedUserData?.userRole?.charAt(0).toUpperCase() + fetchedUserData?.userRole?.slice(1)}</p>
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
                        // setIsNavExpanded(false)
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
