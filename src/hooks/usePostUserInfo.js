import { API_LINK } from "../utils/api"
import { toast } from "react-hot-toast"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useFetchUserInfo = (link, method, body, navigateTo) => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const apiCallHandler = async () => {
    setLoading(true)
    try {
      const token = sessionStorage.getItem("token")
      const getUserData = await fetch(`${API_LINK}/${link}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
      })
      const userData = await getUserData.json()
      // console.log(getUserData)
      if (!getUserData.ok || !getUserData) {
        setLoading(false)
        toast.error(`${userData?.message || userData?.msg},` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }

      if (getUserData.ok) {
        setLoading(false)
        toast.success(`${userData.message || userData.msg}, please refresh the page to see your changes`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: ""
        })
        navigate(navigateTo)
        window.scrollTo(0, 0)
      }
      // console.log(userData)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  // apiCallHandler()
  return { loading, apiCallHandler }
}

export default useFetchUserInfo
