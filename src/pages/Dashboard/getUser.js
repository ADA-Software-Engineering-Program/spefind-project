import { API_LINK } from "../../utils/api"

export let fetchedUserData = {}
export const fetchUserData = async () => {
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
    fetchedUserData = userData.user
    return fetchedUserData
  } catch (error) {
    console.log(error)
  }
}
