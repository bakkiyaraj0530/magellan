export const validate = (values) => {
  const errors = {};
  if (!values.get('firstName')) {
    errors.firstName = 'Required';
  }
  if (!values.get('lastName')) {
    errors.lastName = 'Required';
  }
  if (!values.get('contactReason')) {
    errors.contactReason = 'Required';
  }
  if (!values.get('address1')) {
    errors.address1 = 'Required';
  }
  if (!values.get('questions')) {
    errors.questions = 'Required';
  }
  if (!values.get('phone')) {
    errors.phone = 'Required';
  }
  if (values.get('phone') && isNaN(Number(values.get('phone')))) {
    errors.phone = 'Must be a number';
  }
  if (!values.get('city')) {
    errors.city = 'Required';
  }
  if (!values.get('state')) {
    errors.state = 'Required';
  }
  if (!values.get('zip')) {
    errors.zip = 'Required';
  } else if (isNaN(Number(values.get('zip')))) {
    errors.zip = 'Enter digits only';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Enter a valid Email address';
  }
  // if (!values.questions) {
  //   errors.questions = 'Required';
  // }
  /*
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  } */
  return errors;
};
