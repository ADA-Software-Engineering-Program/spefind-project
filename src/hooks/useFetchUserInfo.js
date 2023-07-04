import { useEffect, useCallback } from "react"
import { API_LINK } from "../utils/api"
import { toast } from "react-hot-toast"
import { useState } from "react"

const useFetchUserInfo = (link) => {
  const [loading, setLoading] = useState(false)

  const [fetchedUserData, setFetchedUserData] = useState({})

  const fetchUserHandler = useCallback(async () => {
    setLoading(true)
    try {
      const token = sessionStorage.getItem("token")
      const getUserData = await fetch(`${API_LINK}/${link}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      const userData = await getUserData.json()
      // console.log(getUserData)
      if (!getUserData.ok || !getUserData) {
        setLoading(false)
        toast.error(`${userData?.msg || userData?.message}` || " Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      // console.log(userData)
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
  return { loading, fetchedUserData }
}

export default useFetchUserInfo
