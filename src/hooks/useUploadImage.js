import { API_LINK } from "../utils/api"
import { toast } from "react-hot-toast"
import { useState } from "react"

const useUploadImage = (propertyName, endpoint, method) => {
  const [imageIsUploadLoading, setImageIsUploadLoading] = useState(false)
  const uploadImageHandler = async (e) => {
    try {
      setImageIsUploadLoading(true)
      let formdata = new FormData()
      formdata.append(propertyName, e.target.files[0])

      const token = sessionStorage.getItem("token")
      const response = await fetch(`${API_LINK}/${endpoint}`, {
        method: method,
        body: formdata,
        redirect: "follow",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (!response.ok || !response) {
        setImageIsUploadLoading(false)
        toast.error(`${data?.msg || data?.message}` || "Something Went Wrong!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
      }
      if (response.ok) {
        setImageIsUploadLoading(false)
        toast.success(`${data?.msg || data?.message}` || " please refresh the page to see your changes", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: { fontSize: "13px" },
          className: ""
        })
        setImageIsUploadLoading(false)
        window.scrollTo(0, 0)
      }
      // console.log(data)
    } catch (error) {
      setImageIsUploadLoading(false)
      toast.error("Something Went Wrong!", {
        duration: 4000,
        position: "top-center",
        // Styling
        style: { fontSize: "13px" },
        className: ""
      })
      console.log(error)
    }
  }
  return { imageIsUploadLoading, uploadImageHandler }
}
export default useUploadImage
