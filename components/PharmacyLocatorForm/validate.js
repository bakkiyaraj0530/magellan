export const validate = (values) => {
  const errors = {};
  if (!values.get('pharmacyName')) {
    errors.firstName = 'Required';
  }
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
