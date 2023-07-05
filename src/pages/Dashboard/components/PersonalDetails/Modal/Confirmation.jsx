import React from "react"
import styles from "./confirmation.module.css"
const Confirmation = ({ yesHandler, noHandler, message }) => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.confirmationBox}>
        <p>{message}</p>
        <div className={styles.btnContainer}>
          <button type='button' onClick={noHandler}>
            NO
          </button>
          <button type='button' onClick={yesHandler}>
            YES
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
