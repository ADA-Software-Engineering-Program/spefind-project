const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Please fill out this field";
  }

  if (!values.lastName) {
    errors.lastName = "Please fill out this field";
  }

  if (!values.gender) {
    errors.gender = "Please select an option";
  }

  if (!values.country) {
    errors.country = "Please fill out this field";
  }

  if (!values.city) {
    errors.city = "Please fill out this field";
  }

  if (!values.biography) {
    errors.biography = "Please fill out this field";
  }

  if (!values.titleOfEvent) {
    errors.titleOfEvent = "Please fill out this field";
  }

  if (!values.date) {
    errors.date = "Please select a date";
  }

  if (!values.location) {
    errors.location = "Please fill out this field";
  }

  if (!values.numberOfAttendees) {
    errors.numberOfAttendees = "Please fill out this field";
  }

  if (!values.field) {
    errors.field = "Please fill out this field";
  }

  if (!values.availableTo || values.availableTo.length === 0) {
    errors.availableTo =
      "Please select at least one place you are available to";
  }

  if (!values.pastEvents) {
    errors.pastEvents = "Please fill out this field";
  }

  if (!values.speakerField) {
    errors.speakerField = "Please fill out this field";
  }

  if (!values.speakerSubField) {
    errors.speakerSubField = "Please fill out this field";
  }

  if (!values.education) {
    errors.education = "Please fill out this field";
  }

  if (!values.currentPosition) {
    errors.currentPosition = "Please fill out this field";
  }

  if (!values.language) {
    errors.language = "Please fill out this field";
  }

  return errors;
};

export default validate;
