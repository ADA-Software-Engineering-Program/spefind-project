import React, { useState, useCallback, useEffect } from "react"
import styles from "./AccountPreferences.module.css"
import Button from "../Button/Button"
import { API_LINK } from "../../../../utils/api"
import { toast } from "react-hot-toast"
import Loader from "../../../../Components/Loader/Loader"

const AccountPreferences = () => {
  const [enableInput, setEnableInput] = useState(true)
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

  return (
    <div className={styles.accountPreferences}>
      {loading && <Loader />}
      <div className='editContainer'>
        <Button
          text1={enableInput ? "Click to make your profile editable" : "Go ahead and edit the input fields now 😎"}
          className='edit'
          type='button'
          onClick={() => {
            setEnableInput(!enableInput)
          }}
        />
      </div>
      <div>
        <label htmlFor='visibility'>Profile Visibility</label>
        <div className=''>
          <input
            type='radio'
            aria-label='visibility'
            id='visibleYes'
            name='visibility'
            className='check-checkbox'
            defaultChecked={fetchedUserData?.isVisible === "public"}
            disabled={enableInput}
          />
          <label htmlFor='visibleYes' className='check-label'>
            <span className='check-checkbox-button'></span>Published (visibility to everyone)
          </label>
        </div>
        <div className=''>
          <input
            type='radio'
            aria-label='visibility'
            id='visibleNo'
            name='visibility'
            className='check-checkbox'
            defaultChecked={fetchedUserData?.isVisible === "private"}
            disabled={enableInput}
          />
          <label htmlFor='visibleNo' className='check-label'>
            <span className='check-checkbox-button'></span>Private (only you and site administrators can see your profile)
          </label>
        </div>
      </div>

      <div className='editContainer'>
        <Button type='submit' text1='SAVE ' className='saveBtn' />
      </div>
    </div>
  )
}

export default AccountPreferences
