import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <nav>
          <Link to="/tweets-cards/">Home</Link>
          {" | "}
          <Link to="/tweets-cards/tweets">Tweets</Link>
        </nav>
        <Outlet />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
