import React from "react"
import "./About.css"

const Ourvalue = ({ number, title, subtitle }) => {
  return (
    <div className=' mt-3 value'>
      <div>
        <p className='valuenum'>{number}</p>
      </div>
      <div className='valuetext'>
        <h4 className='pt-2'>{title}</h4>
        <p className='valuesubtext'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Ourvalue
