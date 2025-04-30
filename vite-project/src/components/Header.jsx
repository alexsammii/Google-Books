import { useState } from "react";
import classes from './Header.module.scss';

export default function Header({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <header className={classes.header}>
            <h1>Google Books Finder</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <input type="text"
                placeholder="Search for books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}