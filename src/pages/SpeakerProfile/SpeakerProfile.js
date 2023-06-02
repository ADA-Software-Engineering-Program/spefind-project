import React, { useEffect, useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Navbar/Header"
import SpeakerAbout from "./SpeakerAbout"
import SpeakerHero from "./SpeakerHero"
import "./SpeakerProfile.css"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

function SpeakerProfile() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (!data || data.length < 0) {
      toast.success("Please Complete your profile to continue!!!", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
      navigate("/create-profile")
    }
  }, [data])

  return (
    <div className='speakAboutContainer'>
      <Header />
      <SpeakerHero data={data} />
      <SpeakerAbout data={data} />
      <Footer className='speakFooter' />
    </div>
  )
}

export default SpeakerProfile
