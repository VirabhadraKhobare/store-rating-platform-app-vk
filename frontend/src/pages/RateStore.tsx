import React, { useState } from 'react';
import '../styles/doodle-theme.css';
import DoodleStarRating from '../components/DoodleStarRating.tsx';

const RateStore: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      setMessage(`Thank you for rating this store ${rating} star${rating > 1 ? 's' : ''}!`);
    }
  };

  return (
    <div className="doodle-box">
      <h2 className="doodle-title">Rate This Store</h2>
      <form onSubmit={handleSubmit}>
        <DoodleStarRating value={rating} onChange={setRating} />
        <button className="doodle-btn" disabled={rating === 0} type="submit">Submit Rating</button>
      </form>
      {message && <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default RateStore;
