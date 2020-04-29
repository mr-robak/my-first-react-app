// src/components/LikeCounter.js
import React, { useState, useEffect } from "react"; // <- note the added

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  // console.log(
  //   "what are these? numLikes:",
  //   numLikes,
  //   "set_numLikes: ",
  //   set_numLikes
  // );

  const increment = () => {
    // console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  const reset = () => {
    // console.log("Reseted!");
    set_numLikes(initial_numLikes);
  };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]); // its gonna fire depending on what we pass as second param

  // Second argument
  // [] -> Empty array  - fire only when component is mounted
  // null => Fire in every re render
  // [something] => when "something" is changed.

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <p>
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
