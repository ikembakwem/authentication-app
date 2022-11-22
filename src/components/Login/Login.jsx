import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { useEffect, useReducer, useState } from 'react';

const initialEmailState = {
  value: '',
  isValid: false,
};

// Email reducer function
const emailReducer = (state = initialEmailState, action) => {
  switch (action.type) {
    case 'USER_INPUT': {
      return { ...state, value: action.val, isValid: action.val.includes('@') };
    }
    case 'INPUT_BLUR': {
      return { ...state, isValid: state.value.includes('@') };
    }
    default: {
      return state;
    }
  }
};

const Login = ({ onLogin }) => {
  // Managing state using useState
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState('');
  const [formIsValid, setFormIsValid] = useState();

  // Managing state using useReducer
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialEmailState
  );

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  // Email input handler
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    // Dispatch email action type
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // Check if email & password input is valid and update form validation state
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
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
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  // Validate password input
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  // Form submission handler
  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailState.value, enteredPassword);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
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
