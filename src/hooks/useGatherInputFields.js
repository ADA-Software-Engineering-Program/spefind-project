const useGatherInputFields = (setEventData) => {
  const setEventInputs = (value, key) => {
    setEventData((prev) => {
      return { ...prev, [key]: value }
    })
  }
  return { setEventInputs }
}

export default useGatherInputFields
