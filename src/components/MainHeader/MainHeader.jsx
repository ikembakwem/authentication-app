import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={classes['main-header']}>
      <h1>A typical page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
