"use client";

import { useState } from "react";

function Header({ name, grade }) {
  const [likes, setLikes] = useState(0);

  // let str = name + "@" + grade;
  function HandleOnClick() {
    setLikes(likes + 1);
  }

  return (
    <h1 onClick={HandleOnClick}>
      {name} ♡ {likes}
    </h1>
  );
}

export default Header;
