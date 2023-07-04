import React from "react"
import styles from "./confirmation.module.css"
const Confirmation = () => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.confirmationBox}>
        <button type='button'>NO</button>
        <button type='button'>YES</button>
      </div>
    </div>
  )
}

export default Confirmation
