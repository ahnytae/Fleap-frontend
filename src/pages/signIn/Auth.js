export const isEmail = (email) => {
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};

export const isValidation = (email) => {
  if (!isEmail(email)) {
    return { success: false, error: "email Error!" };
  } else {
    return { success: true, error: null };
  }
};

export const isPw = (password) => {
  const pwRegex = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  return pwRegex.test(password);
};
