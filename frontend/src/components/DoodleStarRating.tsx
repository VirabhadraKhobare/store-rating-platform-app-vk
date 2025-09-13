import React, { useState } from 'react';
import '../styles/doodle-theme.css';

interface DoodleStarRatingProps {
  value: number;
  onChange: (rating: number) => void;
}

const DoodleStarRating: React.FC<DoodleStarRatingProps> = ({ value, onChange }) => {
  return (
    <div className="doodle-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`doodle-star${value >= star ? ' selected' : ''}`}
          onClick={() => onChange(star)}
          role="button"
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default DoodleStarRating;
