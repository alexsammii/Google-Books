import classes from './BookCard.module.scss';

export default function BookCard({ book, onClick }) {
    const { title, authors, description, imageLinks } = book.volumeInfo;
  
    return (
      <div className={classes.card} onClick={() => onClick(book)}>
        <img src={imageLinks?.thumbnail} alt={title} />
        <h3>{title}</h3>
        <p className={classes.author}>{authors?.join(', ')}</p>
        <p className={classes.description}>{description?.slice(0, 100)}...</p>
      </div>
    );
  }
  
  