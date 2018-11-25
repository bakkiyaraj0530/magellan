/*eslint-disable*/
export const validate = (values) => {
  const errors = {};
    
  if (!values.get('currentPassword')) {
    errors.currentPassword = 'Current Password required';
  }

  if (!values.get('emailAddress')) {
    errors.emailAddress = 'Email Address required';
  } else if (!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(values.get('emailAddress'))) {
   errors.emailAddress = 'Invalid Email Address';
  }

 if (!values.get('confirmEmailAddress')) {
    errors.confirmEmailAddress = 'Confirm Email Address required';
  } else if (!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(values.get('confirmEmailAddress'))) {
   errors.confirmEmailAddress = 'Invalid email address';
  }

  var em1 = values.get('emailAddress');
  var em2 = values.get('confirmEmailAddress');
  if(em1!="" && em2 !=""){
    if (em1 != em2) {
       errors.emailAddress = 'Email Address does not match.';
        errors.confirmEmailAddress  = 'Email Address does not match.';
    }
  }
  return errors;
};
