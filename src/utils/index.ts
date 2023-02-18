export const Validation = (values) => {
  let errors = {} as any;

  if (!values.username) {
    errors.username = "Username is required";
  } else if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
