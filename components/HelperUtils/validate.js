// import isEmail from 'validator/lib/isEmail';

const required = (value) => (value ? undefined : '');

const maxLength = (max) => (value) =>
      (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength20 = maxLength(20);

const number = (value) =>
      value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = (min) => (value) =>
      value && value < min ? `Must be at least ${min}` : undefined;

const dateofbirth = (value) => {
  const ageDifMs = Date.now() - new Date(value).getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const curAge = (ageDate.getUTCFullYear() - 1970);
  return curAge < 14 ? 'You must be 14 years or older to register' : undefined;
};
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Enter a valid email address'
    : undefined;
const validPassword = (value) => {
  if (value) {
    const rules = {
      isValidLength: (value.length >= 8 && value.length <= 20),
      hasLowerLetter: /[a-z]/.test(value),
      hasUpperLetter: /[A-Z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$*]/.test(value),
      length: value.length ? 1 : 0,
    };
    rules.isValidChar = ((1 * rules.hasLowerLetter) + (1 * rules.hasUpperLetter) + (1 * rules.hasNumber) + (1 * rules.hasSpecialChar)) >= 3;
    rules.showFeedback = (value.length > 0);
    rules.hideFeedback = (!rules.showFeedback || !rules.isValidLength || !rules.isValidChar);
    return rules;
  }
  return undefined;
};

const confirmPassword = (value, { password }) =>
  value && password && value !== password ? 'Passwords entered do not match' : undefined;

export { required,
         maxLength,
         maxLength20,
         number,
         minValue,
         dateofbirth,
         email,
         validPassword,
         confirmPassword,
       };
