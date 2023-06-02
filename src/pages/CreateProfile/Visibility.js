import React from "react"

const Visibility = ({ submit, prevStep, formik }) => {
  const formValues = ["isVisible"]

  const handleSubmit = (e) => {
    e.preventDefault()
    const errorField = []
    const emptyField = []

    // set the fields to touched
    formValues.forEach((value) => {
      formik.setFieldTouched(value, true)
    })

    formValues.forEach((value) => {
      if (!formik.values[value]) {
        emptyField.push(value)
      } else {
        const index = emptyField.indexOf(value)
        if (index > -1) {
          errorField.splice(index, 1)
        }
      }

      if (formik.errors[value]) {
        errorField.push(value)
      } else {
        const index = errorField.indexOf(value)
        if (index > -1) {
          errorField.splice(index, 1)
        }
      }
    })

    if (errorField.length === 0 && emptyField.length === 0) {
      submit()
    }
  }

  const handlePrev = (e) => {
    e.preventDefault()
    prevStep()
  }

  return (
    <div>
      <h2 className='visibility-heading'>VISIBILITY AND NOTIFICATIONS</h2>

      <div className='visibility-container'>
        <label className='profile-label'>PROFILE VISIBILITY*</label>
        <p className='visibility-paragraph'>To make your profile public, it needs to be confirmed by you first</p>
        <div className='check-cont' {...formik.getFieldProps("visibility")}>
          <div>
            <input
              type='radio'
              name='isVisible'
              className='check-input'
              value='public'
              id='public'
              defaultChecked={formik.values.isVisible === "public" ? true : false}
            />
            <label className='check-label' htmlFor='public'>
              <span className='check-radio-button'></span>Public (visibility to everyone)
            </label>
          </div>

          <div>
            <input
              type='radio'
              name='isVisible'
              className='check-input'
              value='private'
              id='private'
              defaultChecked={formik.values.isVisible === "private" ? true : false}
            />
            <label className='check-label' htmlFor='private'>
              <span className='check-radio-button'></span>Private (only you and site administrators can see your profile)
            </label>
          </div>
        </div>
      </div>

      <div className='btn-box'>
        <button type='button' className='submitBtn submitBtn--grey' onClick={handlePrev}>
          Back to Availability & fees
        </button>
        <button type='button' className='submitBtn submitBtn--orange' onClick={handleSubmit}>
          FINISH
        </button>
      </div>
    </div>
  )
}

export default Visibility
