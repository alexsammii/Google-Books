import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.scss';

export default function Header({ onSearch }) {
  return (
    <header className={classes.header}>
      <img
      src='../../assets/LOGO.png'
      alt='Google Booke Logo'
      className='{classes.logo}'
      />
      <SearchBar onSearch={onSearch} />
    </header>
  );
}
