import React, { useState, useEffect } from "react";

export default function BadComponent() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? +localStorage.getItem("count") : 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>Bad Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
