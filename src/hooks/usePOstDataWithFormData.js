import { useState } from "react"
import { API_LINK } from "../utils/api"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const usePOstDataWithFormData = (data, link, method, navigateTo) => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const saveFormData = async () => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("titleOfEvent", data.titleOfEvent)
      formData.append("date", data.date)
      formData.append("location", data.location)
      formData.append("numberOfAttendees", data.numberOfAttendees)
      formData.append("field", data.field)
      formData.append("eventPhoto", data.eventPhoto)
      //api/profile/event/add
      const token = sessionStorage.getItem("token")
      const saveData = await fetch(`${API_LINK}/${link}`, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      const response = await saveData.json()
      // console.log(saveData)
      if (!saveData.ok || !saveData) {
        setLoading(false)
        toast.error(`${response?.msg || response?.message}` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      if (saveData.ok) {
        setLoading(false)
        toast.success(`${response.message || response.msg}, please refresh the page to see your changes`, {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: ""
        })
        setLoading(false)
        navigate(navigateTo)
        window.scrollTo(0, 0)
      }
      // console.log(response)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return { loading, saveFormData }
}

export default usePOstDataWithFormData
