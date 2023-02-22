import { useEffect, useState } from "react";

function increment(n) {
  return n + 1;
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(count);
      setCount(count + 100);
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
