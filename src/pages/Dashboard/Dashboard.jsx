import { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import "./Dashboard.css";

import userImg from "./assets/userImg.png";

import { HiOutlineLogout } from "react-icons/hi";

import Logout from "../../Components/Logout/Logout";

import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Upgrade from "./components/Upgrade/Upgrade";

const Dashboard = () => {
  const [dashboardBodyContent, setDashboardBodyContent] = useState(
    <PersonalDetails />
  );
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const [currentMenu, setCurrentMenu] = useState("menu1");

  const sideBarTitleAndComponent = [
    {
      id: "menu1",
      text: "Personal Details",
      component: <PersonalDetails />,
    },
    {
      id: "menu2",
      text: "Niche",
      component: "",
    },
    {
      id: "menu3",
      text: "Availability & Fees",
      component: "",
    },
    {
      id: "menu4",
      text: "Account Preferences",
      component: "",
    },
    {
      id: "menu5",
      text: "Publication",
      component: "",
    },
    {
      id: "menu6",
      text: "Passwords",
      component: "",
    },
    {
      id: "menu7",
      text: "Email",
      component: "",
    },
    {
      id: "menu8",
      text: "Signature",
      component: "",
    },
    {
      id: "menu9",
      text: "Media",
      component: "",
    },
    {
      id: "menu10",
      text: "Messages",
      component: "",
    },
    {
      id: "menu11",
      text: "Upgrade",
      component: <Upgrade />,
    },
  ];

  return (
    <AppLayout>
      <div
        className={isNavExpanded ? "" : "overlay"}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></div>
      <div className="dashboard">
        <h3>Your Dashboard</h3>
        <button
          className="harmburger"
          // setting the isNavExpanded variable to the opposite of whatever it is when users click on the button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="dashboardContainer">
          <div className={isNavExpanded ? "sidebar" : "sidebarMobile"}>
            <div>
              <div className="userProfile">
                <img src={userImg} alt="user profile" />
                <p className="username">Titilayo</p>
                <p className="userCareer">Career Speaker</p>
              </div>
              <ul className="userMenu">
                {sideBarTitleAndComponent.map((menu) => {
                  return (
                    <li
                      className={currentMenu === menu.id ? "span-select" : ""}
                      key={menu.id}
                      onClick={() => {
                        setCurrentMenu(menu.id);
                        setDashboardBodyContent(menu.component);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <span>{menu.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Logout classes="logout">
              <HiOutlineLogout className="logoutIcon" />
            </Logout>
          </div>
          <div className="dahsboardBody">{dashboardBodyContent}</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
