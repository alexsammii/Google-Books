import BookCard from "../BookCard/BookCard";
import classes from './BookGrid.module.scss';

export default function BookGrid({ books, onBookClick }) {
    return (
      <section className={classes.grid}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClick={onBookClick} />
        ))}
      </section>
    );
  }
  