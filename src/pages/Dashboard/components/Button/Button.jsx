import React from "react"
import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <button className={`${styles.DashboardBtn} ${props.className}`} type={props.type} onClick={props.onClick}>
      {props.text1}
    </button>
  )
}

export default Button
