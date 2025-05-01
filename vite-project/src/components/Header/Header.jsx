import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.scss';
import logo from '../../assets/GB-logo.png';

export default function Header({ onSearch }) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Google Books Logo" className={classes.logo} onClick={() => window.location.reload()}/>
      <SearchBar onSearch={onSearch} />
    </header>
  );
}
