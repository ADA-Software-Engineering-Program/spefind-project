import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
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
import useFetchUserInfo from "../../hooks/useFetchUserInfo"

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()
  const { fetchedUserData } = useFetchUserInfo(`api/profile/user`)
  useEffect(() => {
    if (fetchedUserData?.isProfileCreated === false) {
      navigate("/create-profile", { state: null, replace: true })
      toast.error(" Please create your profile", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
    }
  }, [fetchedUserData])

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
    // background color needs to be changed as it is in the design, design needs to be adjusted so as to follow the new logo
    <AppLayout backgroundColor={"rgba(227, 80, 47, 0.1)"}>
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
                {sideBarTitleAndComponent.map((menu, index) => {
                  return (
                    <li
                      className={currentMenu === menu.id ? "span-select" : ""}
                      key={index}
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
