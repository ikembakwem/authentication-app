import classes from './Navigation.module.css';

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && <button onClick={onLogout}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navigation;
