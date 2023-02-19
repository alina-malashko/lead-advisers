export const emailValidator = (values) => {
  let errors = {};
  let email = values.email.trim();

  const EMAIL_REGEXP =
    /^[a-zA-Z0-9]+([!"#$%&'()*+,\-.:;<=>?[\]\\^_{}][a-zA-Z0-9]+)*@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)?)(\.[a-z]{2,})+$/u;

  if (!values.email) {
    errors.email = 'Required field';
  } else if (!EMAIL_REGEXP.test(email)) {
    errors.email = 'Invalid email';
  }

  return errors;
};