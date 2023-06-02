import React, { useState, useImperativeHandle, forwardRef } from "react"
import { Stepper, Step } from "react-form-stepper"

const Steppers = forwardRef((props, ref) => {
  // eslint-disable-next-line
  const [progress, setProgress] = useState(0)

  useImperativeHandle(ref, () => ({
    next() {
      setProgress(progress + 1)
    },
    prev() {
      setProgress(progress - 1)
    }
  }))

  return (
    <div className='profile-step'>
      <Stepper
        activeStep={progress}
        connectorStateColors='true'
        styleConfig={{
          activeBgColor: "#E3502F",
          completedBgColor: "#E3502F"
          // fontWeight: "bold",
          // labelFontSize: "16px",
        }}
        connectorStyleConfig={{
          completedColor: "#E3502F",
          size: 2
        }}
      >
        <Step label='PERSONAL DETAILS' className='tunde' />
        <Step label='FIELD' />
        <Step label='AVAILABILTY & FEES' />
        <Step label='ACCOUNT PREFERENCES' />
      </Stepper>
    </div>
  )
})

export default Steppers
