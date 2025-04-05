import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 2)}>
        count is {count}
      </button>
    </div>
  );
};
