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
