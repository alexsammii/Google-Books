import { useState } from "react"
import Header from './components/Header';
import './scss/main.scss';
import { fetchBooks } from "./services/bookService";
import BookGrid from "./components/BookGrid";
import Modal from "./components/Modal";
import RequestForm from "./components/RequestForm";
import { useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectBook, setSelectBook] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const results = await fetchBooks(query);
      console.log('API results:', results);
      setBooks(results);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={`app ${theme}`}>
  <Header onSearch={handleSearch} />
  <button
  onClick={toggleTheme}
  className="theme-toggle"
  aria-label="Toggle Theme"
  >
  {theme === 'light' ? '🌙' : '☀️'}
  </button>
  <button onClick={() => setShowRequestForm(true)} style={{ margin: '1rem auto', display: 'block' }}>
  Request a book
  </button>
  {showRequestForm && <RequestForm onClose={() => setShowRequestForm(false)} />}
  {loading && <p style={{textAlign: 'center'}}>Loading...</p>}
  {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
  {!loading && books.length === 0 && (
    <p style={{ textAlign: 'center', marginTop: '2rem' }}>
      No books found. Try a different search.
    </p>
  )}
  {selectBook && (
  <Modal book={selectBook} onClose={() => setSelectBook(null)} />
  )}

  <BookGrid books={books} onBookClick={(book) => setSelectBook(book)} />
  </div>
  );
}

export default App
