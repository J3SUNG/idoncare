import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-[100px] font-strong">Hello</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </>
  );
}

export default App;