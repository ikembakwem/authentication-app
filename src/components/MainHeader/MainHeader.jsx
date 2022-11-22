import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>A typical page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
