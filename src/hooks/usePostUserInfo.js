import { API_LINK } from "../utils/api"
import { toast } from "react-hot-toast"
import { useState } from "react"

const useFetchUserInfo = (link, method, body) => {
  const [loading, setLoading] = useState(false)

  const [response, setResponse] = useState({})

  const fetchUserHandler = async () => {
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
        toast.error(`${userData?.msg} Something Went Wrong!`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      // console.log(userData)
      setResponse(userData.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  fetchUserHandler()
  return { loading, response }
}

export default useFetchUserInfo
