import React, { useState } from "react"
import styles from "./AccountPreferences.module.css"

const AccountPreferences = () => {
  const [enableInput, setEnableInput] = useState(true)

  return (
    <div className={styles.accountPreferences}>
      <div className='editContainer'>
        <button
          type='button'
          className='edit'
          onClick={() => {
            setEnableInput(!enableInput)
          }}
        >
          click to edit your profile
        </button>
      </div>
      <div>
        <label htmlFor='visibility'>Profile Visibility</label>
        <div className=''>
          <input type='radio' aria-label='visibility' id='visibleYes' name='visibility' className='check-checkbox' disabled={enableInput} />
          <label htmlFor='visibleYes' className='check-label'>
            <span className='check-checkbox-button'></span>Published (visibility to everyone)
          </label>
        </div>
        <div className=''>
          <input type='radio' aria-label='visibility' id='visibleNo' name='visibility' className='check-checkbox' disabled={enableInput} />
          <label htmlFor='visibleNo' className='check-label'>
            <span className='check-checkbox-button'></span>Private (only you and site administrators can see your profile)
          </label>
        </div>
      </div>

      <div className='editContainer'>
        <button type='submit' className='saveBtn'>
          SAVE
        </button>
      </div>
    </div>
  )
}

export default AccountPreferences
