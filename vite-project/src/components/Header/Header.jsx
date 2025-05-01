import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.scss';
import logo from '../../assets/GB-logo.png';

export default function Header({ onSearch }) {
  return (
    <header className={classes.header}>
        {/* <h1>Google Books</h1> */}
      <img src={logo} alt="Google Books Logo" className={classes.logo} />
      <SearchBar onSearch={onSearch} />
    </header>
  );
}
