import { useState } from "react";

import Image from "./Image";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Image image="barrel.png" imageAlt="ImageComponent" imageStyle="" />
      <Image image="sad.png" imageAlt="ImageComponent" imageStyle="" />
      <hr/>
      <img src="src/assets/barrel.png" alt="test" />
      <img src="./img/barrel.png" alt="test" />
      <img src="barrel.png" alt="test" />
      <hr />
      <img src="src/assets/barrel.png" alt="test" />
      <img src="/src/assets/barrel.png" alt="test" />
      <img src="./src/assets/barrel.png" alt="test" />
      <hr />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
