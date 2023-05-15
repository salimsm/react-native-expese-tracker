interface IErrors {
  email: string;
  pwd: string;
}
export const loginValidate = (values: IErrors) => {
  const errors: Partial<IErrors> = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.pwd) {
    errors.pwd = 'Required';
  } else if (!/^(?=.*[a-z])(?=.*\d).+$/i.test(values.pwd)) {
    errors.pwd = 'Password should contain mix of characer and number';
  }
  return errors;
};
