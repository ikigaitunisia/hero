/**
 * Check if string is a phone
 * @param val
 * @returns
 */
export const checkIsPhoneFormat = (val) => {
  // For now, just testing if it's a number
  // TODO test all phone format
  const regExp = /[a-zA-Z]/g;
  return val ? !regExp.test(val) : false;
};

export const checkIsValidPassword = (password) => {
  var k = true;
  if (!/[a-z]/.test(password)) {
    k = false;
  }

  // Check if password contains at least 1 Uppercase letter

  // Check if password contains at least 1 number
  if (!/[0-9]/.test(password)) {
    k = false;
  }
  if (!/[!@$#\+\-\$%\^&\*/]/.test(password)) {
    k = false;
  }
  if (password.length < 8) {
    k = false;
  }
  return k;
};
