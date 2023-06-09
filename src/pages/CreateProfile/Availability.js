import { useState } from "react"

const Availability = ({ nextStep, prevStep, formik, fetchData }) => {
  const [showOtherStates, setShowOtherStates] = useState(false)
  const [otherstate, setOtherstate] = useState("")

  const otherStateSetter = (e) => {
    setOtherstate(e.target.value)
  }

  const formValues = ["eventType", "availableTo", "pricing", "isVolunteer"]

  const handleNext = (e) => {
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
      nextStep()
    }
  }

  const handlePrev = (e) => {
    e.preventDefault()
    prevStep()
  }

  return (
    <div>
      <div className='profile-group'>
        <label className='profile-label'>WHICH TYPES OF EVENTS ARE YOU INTERESTED IN?*</label>
        <div className='check-cont' {...formik.getFieldProps("eventType")}>
          {fetchData.eventTypes.map(function (event) {
            return (
              <div key={event._id}>
                <input
                  type='checkbox'
                  name='eventType'
                  className='check-checkbox'
                  value={event.eventType}
                  id={event._id}
                  defaultChecked={
                    formik.values.eventType.find((value) => {
                      return value === event.eventType
                    })
                      ? true
                      : false
                  }
                />
                <label className='check-label' htmlFor={event._id}>
                  <span className='check-checkbox-button'></span>
                  {event.eventType}
                </label>
              </div>
            )
          })}
          {formik.touched.eventType && formik.errors.eventType ? <div className='profile-error'>{formik.errors.eventType}</div> : null}
        </div>
      </div>

      <div className='profile-group'>
        <label className='profile-label'>AVAILABLE TO*</label>
        <div className='check-cont' {...formik.getFieldProps("availableTo")}>
          <div>
            <input
              type='checkbox'
              name='availableTo'
              className='check-checkbox'
              id='nigeria'
              value={"Nigeria"}
              defaultChecked={formik.values.availableTo.includes("nigeria") ? true : false}
            />
            <label className='check-label' htmlFor='nigeria'>
              <span className='check-checkbox-button'></span>
              Nigeria
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              name='availableTo'
              className='check-checkbox'
              id='ghana'
              value={"Ghana"}
              defaultChecked={formik.values.availableTo.includes("ghana") ? true : false}
            />
            <label className='check-label' htmlFor='ghana'>
              <span className='check-checkbox-button'></span>
              Ghana
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              name='availableTo'
              className='check-checkbox'
              id='somalia'
              value={"Somalia"}
              defaultChecked={formik.values.availableTo.includes("somalia") ? true : false}
            />
            <label className='check-label' htmlFor='somalia'>
              <span className='check-checkbox-button'></span>
              Somalia
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              name='availableTo'
              className='check-checkbox'
              id='southAfrica'
              value={"South Africa"}
              defaultChecked={formik.values.availableTo.includes("south africa") ? true : false}
            />
            <label className='check-label' htmlFor='southAfrica'>
              <span className='check-checkbox-button'></span>
              South Africa
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              name='availableTo'
              className='check-checkbox'
              id='turkey'
              value={"Turkey"}
              defaultChecked={formik.values.availableTo.includes("somalia") ? true : false}
            />
            <label className='check-label' htmlFor='turkey'>
              <span className='check-checkbox-button'></span>
              Turkey
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              name='availableTo'
              className='check-checkbox'
              id='egypt'
              value={"Egypt"}
              defaultChecked={formik.values.availableTo.includes("egypt") ? true : false}
            />
            <label className='check-label' htmlFor='egypt'>
              <span className='check-checkbox-button'></span>
              Egypt
            </label>
          </div>
          <input
            type='checkbox'
            className='check-checkbox'
            onClick={() => {
              setShowOtherStates(!showOtherStates)
            }}
            id={"otherStates"}
            defaultChecked={formik.values.availableTo.includes(otherstate) ? true : false}
          />
          <label className='check-label' htmlFor={"otherStates"}>
            <span className='check-checkbox-button'></span>
            Other Countries
          </label>
        </div>
        <div>
          <input
            type='text'
            name='availableTo'
            placeholder='Type country here'
            value={otherstate}
            onChange={otherStateSetter}
            className={showOtherStates ? "otherState-input displayBlock" : "otherState-input"}
            {...formik.getFieldProps("availableTo[0]")}
          />
        </div>
        {formik.touched.availableTo && formik.errors.availableTo ? <div className='profile-error'>{formik.errors.availableTo}</div> : null}
      </div>

      <div className='profile-group'>
        <label className='profile-label'>FEE*</label>
        <div className='check-cont' {...formik.getFieldProps("pricing")}>
          <input type='radio' className='check-input' id={"askForPrice"} name='pricing' value={"ask for pricing"} />
          <label className='check-label' htmlFor={"askForPrice"}>
            <span className='check-radio-button'></span> Ask for Pricing
          </label>
          {fetchData.price?.map((prices) => {
            return (
              <div key={prices._id}>
                <input
                  type='radio'
                  name='pricing'
                  className='check-input'
                  value={prices.pricing}
                  id={prices._id}
                  defaultChecked={formik.values.pricing === prices.pricing ? true : false}
                />
                <label className='check-label' htmlFor={prices._id}>
                  <span className='check-radio-button'></span> {prices.pricing}
                </label>
              </div>
            )
          })}
        </div>
        {formik.touched.pricing && formik.errors.pricing ? <div className='profile-error'>{formik.errors.pricing}</div> : null}
      </div>

      <div className='profile-group'>
        <label className='profile-label'>VOLUNTEER*</label>
        <div className='check-cont' {...formik.getFieldProps("isVolunteer")}>
          <div>
            <input
              type='radio'
              name='isVolunteer'
              className='check-input'
              value='no'
              id='no'
              defaultChecked={formik.values.isVolunteer === "no" ? true : false}
            />
            <label className='check-label' htmlFor='no'>
              <span className='check-radio-button'></span>No
            </label>
          </div>

          <div>
            <input
              type='radio'
              name='isVolunteer'
              className='check-input'
              value='yes'
              id='yes'
              defaultChecked={formik.values.isVolunteer === "yes" ? true : false}
            />
            <label className='check-label' htmlFor='yes'>
              <span className='check-radio-button'></span>Yes
            </label>
          </div>
          {formik.touched.isVolunteer && formik.errors.isVolunteer ? (
            <div className='profile-error'>{formik.errors.isVolunteer}</div>
          ) : null}
        </div>
      </div>

      <div className='btn-box'>
        <button type='button' className='submitBtn submitBtn--grey' onClick={handlePrev}>
          Back to Niche
        </button>
        <button type='button' className='submitBtn submitBtn--grey' onClick={handleNext}>
          {"Next"}
        </button>
      </div>
    </div>
  )
}

export default Availability
