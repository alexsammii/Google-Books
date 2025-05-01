import { useState } from 'react';
import classes from './RequestForm.module.scss';

export default function RequestForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book requested:', formData);
    setSubmitted(true);
  };

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {!submitted ? (
          <>
            <h2>Request a Book</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
              <input
                name="title"
                placeholder="Book Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <input
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Anything else?"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Submit Request</button>
            </form>
          </>
        ) : (
          <>
            <h2>📬 Request Received!</h2>
            <p>Thanks for suggesting a book. We'll look into it!</p>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
}