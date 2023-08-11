import React from 'react';

const StarReview = ({ totalColoredStars }) => {
  const maxStars = 5;
  const coloredStars = Math.min(totalColoredStars, maxStars);
  const whiteStars = maxStars - coloredStars;

  return (
    <div className="inline">
      {[...Array(coloredStars)].map((_, index) => (
        <span key={index} className="text-lg text-blue-500">
          &#9733; {/* Unicode character for a solid star */}
        </span>
      ))}
      {[...Array(whiteStars)].map((_, index) => (
        <span key={index} className="text-lg">
          &#9734; {/* Unicode character for an outline star */}
        </span>
      ))}
    </div>
  );
};

export default StarReview;
