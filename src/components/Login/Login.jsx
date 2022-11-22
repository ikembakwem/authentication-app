import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { useEffect, useState } from 'react';

const Login = ({ onLogin }) => {
  // States
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState('');
  const [formIsValid, setFormIsValid] = useState();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  // Email input handler
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // Check if email & password input is valid and update form validation state
    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  // Password input handler
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // Check if email & password input is valid and update form validation state
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  // Validate email input
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  // Validate password input
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  // Form submission handler
  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.action}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
