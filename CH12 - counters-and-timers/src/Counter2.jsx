import { useEffect, useRef, useState } from "react";

function increment(n) {
  return n + 1;
}

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;

  useEffect(() => {
    setTimeout(() => {
      console.log(countRef.current);
    }, 5000);
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(increment)}>Increment</button>
    </div>
  );
}

export default Counter;
