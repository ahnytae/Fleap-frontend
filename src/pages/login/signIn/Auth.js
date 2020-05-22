export const isEmail = (email) => {
  const emailRule = /^[0-9a-zA-Z][0-9a-zA-Z\_\-\.\+]+[0-9a-zA-Z]@[0-9a-zA-Z][0-9a-zA-Z\_\-]*[0-9a-zA-Z](\.[a-zA-Z]{2,6}){1,2}$/i;
  if (!emailRule.test(email)) {
    return false; //경고
  } else {
    return true;
  }
};

export const isValidation = (email) => {
  if (!isEmail(email)) {
    return false;
  } else {
    return true;
  }
};

export const isPw = (password) => {
  const pwRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  return pwRegex.test(password);
};
