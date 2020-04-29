// src/components/LikeButton.js
import React, { useState } from "react"; // <- note the added import of useState

const LikeButton = () => {
  const initialState = false;
  const [Liked, changeLiked] = useState(initialState);
  const text = Liked ? "You've liked this. Click to unlike" : "Like this!";

  const toggle = () => {
    return changeLiked(!Liked);
  };
  return <button onClick={toggle}>{text}</button>;
};

export default LikeButton;
