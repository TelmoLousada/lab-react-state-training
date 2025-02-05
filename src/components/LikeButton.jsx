import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button className="like-button" onClick={handleLikeClick}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;