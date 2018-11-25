/*eslint-disable*/
export const validate = (values) => {
  const errors = {};


  if (!values.get('currentPassword')) {
    errors.currentPassword = 'Current Password required';
  }

  if (!values.get('newPassword')) {
    errors.newPassword = 'New Password required';
  }else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.get('newPassword'))) {
    errors.newPassword = 'Invalid password'
  }

  
  if (!values.get('confirmNewPassword')) {
    errors.confirmNewPassword = 'Confirm New Password required';
  }else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.get('confirmNewPassword'))) {
    errors.confirmNewPassword = 'Invalid password'
  }

  var pwd1 = values.get('newPassword');
  var pwd2 = values.get('confirmNewPassword');
  if(pwd1!="" && pwd2 !=""){
    if (pwd1 != pwd2) {
        errors.newPassword = 'Passwords do not match.';
        errors.confirmNewPassword = 'Passwords do not match.';
    }
  }
  return errors;
};
