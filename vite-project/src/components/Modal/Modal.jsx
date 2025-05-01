import classes from './Modal.module.scss';

export default function Modal({ book, onClose }) {
  const { title, publisher, publishedDate, language, pageCount, previewLink } =
    book.volumeInfo;

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p><strong>Publisher:</strong> {publisher || 'N/A'}</p>
        <p><strong>Published:</strong> {publishedDate || 'N/A'}</p>
        <p><strong>Language:</strong> {language?.toUpperCase() || 'N/A'}</p>
        <p><strong>Pages:</strong> {pageCount || 'N/A'}</p>
        <a href={previewLink} target="_blank" rel="noreferrer">
          View on Google Books 
        </a>
        <br />
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}