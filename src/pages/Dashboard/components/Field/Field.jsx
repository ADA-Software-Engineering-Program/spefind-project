import React, { useState } from "react"
import "./Field.css"
import Button from "../Button/Button"
import Loader from "../../../../Components/Loader/Loader"
import useFetchUserInfo from "../../../../hooks/useFetchUserInfo"
import usePostUserInfo from "../../../../hooks/usePostUserInfo"
import useGatherInputFields from "../../../../hooks/useGatherInputFields"

const Field = () => {
  const [enableInput, setEnableInput] = useState(true)
  const [showOtherStates, setShowOtherStates] = useState(false)
  const [inputDatas, setInputDatas] = useState()

  const { loading, fetchedUserData } = useFetchUserInfo(`api/profile/user`)
  const { apiCallHandler: editUserDataHandler, loading: editUserDataIsLoading } = usePostUserInfo(`api/profile/update`, "PUT", inputDatas)

  const { setEventInputs } = useGatherInputFields(setInputDatas)
  const editUserData = (e) => {
    e.preventDefault()
    console.log(inputDatas)
    editUserDataHandler()
  }
  return (
    <div className='field'>
      {(loading || editUserDataIsLoading) && <Loader />}
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
      <form>
        <div>
          <label htmlFor='mainField'>Your main field</label>
        </div>
        <input
          aria-label='mainField'
          placeholder='Main Field'
          id='mainField'
          className='input'
          disabled={enableInput}
          defaultValue={fetchedUserData?.field}
          onChange={(e) => {
            setEventInputs(e.target.value, "mainField")
          }}
        />
        <div>
          <label htmlFor='subfield'>Subfield</label>
        </div>
        <input
          aria-label='subfield'
          placeholder='Subfield'
          id='subfield'
          className='input'
          disabled={enableInput}
          defaultValue={fetchedUserData?.subField}
          onChange={(e) => {
            setEventInputs(e.target.value, "subfield")
          }}
        />
        <div>
          <label htmlFor='education'>Education</label>
        </div>
        <input
          aria-label='education'
          placeholder='Education'
          id='education'
          className='input'
          disabled={enableInput}
          defaultValue={fetchedUserData?.education}
          onChange={(e) => {
            setEventInputs(e.target.value, "education")
          }}
        />
        <div>
          <label htmlFor='career'>Current Career/Job</label>
        </div>
        <input
          aria-label='career'
          placeholder='Current Career/Job'
          id='career'
          className='input'
          disabled={enableInput}
          defaultValue={fetchedUserData?.job?.title}
          onChange={(e) => {
            setEventInputs(e.target.value, "career")
          }}
        />
        <div>
          <label htmlFor='language'>Language</label>
        </div>
        <div className=''>
          <input
            type='checkbox'
            aria-label={fetchedUserData?.language}
            id={fetchedUserData?.language}
            checked={fetchedUserData?.language === fetchedUserData?.language}
            name='language'
            className='check-checkbox'
            disabled={enableInput}
            onChange={(e) => {
              setEventInputs(e.target.value, "language")
            }}
          />
          <label htmlFor={fetchedUserData?.language} className='check-label'>
            <span className='check-checkbox-button'></span>
            {fetchedUserData?.language}
          </label>
        </div>
        <div className=''>
          <input
            type='button'
            aria-label='other'
            id='other'
            name='language'
            className='check-checkbox'
            disabled={enableInput}
            value={"+"}
            onClick={() => {
              setShowOtherStates(!showOtherStates)
            }}
          />

          <label htmlFor='other' className='check-label'>
            <span className='check-checkbox-button'></span>Change Language
          </label>

          <input
            type='text'
            name='language'
            id='language'
            placeholder='Type language here'
            className={showOtherStates ? "otherState-input displayBlock" : "otherState-input"}
            onChange={(e) => {
              setEventInputs(e.target.value, "language")
            }}
          />
        </div>

        <div className='editContainer'>
          <Button type='button' text1='SAVE' className='saveBtn' onClick={editUserData} />
        </div>
      </form>
    </div>
  )
}

export default Field
