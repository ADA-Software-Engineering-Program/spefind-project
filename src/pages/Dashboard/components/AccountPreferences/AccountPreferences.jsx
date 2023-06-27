import React, { useState } from "react"
import styles from "./AccountPreferences.module.css"
import Button from "../Button/Button"
import Loader from "../../../../Components/Loader/Loader"
import useFetchUserInfo from "../../../../hooks/useFetchUserInfo"

const AccountPreferences = () => {
  const [enableInput, setEnableInput] = useState(true)

  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)

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
            checked={fetchedUserData?.isVisible === "public"}
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
            checked={fetchedUserData?.isVisible === "private"}
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
