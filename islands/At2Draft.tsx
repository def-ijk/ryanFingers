import { useRef, useState, useEffect } from "preact/hooks";

export default function At2Draft() {
  const [count, setCount] = useState(0);

  return (
    <div style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
      <h2>Test Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
} 