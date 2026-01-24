import { useState } from "react";
import reactLogo from "./assets/react.svg";
import angularLogo from "./assets/angular-icon.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://angular.dev" target="_blank">
          <img src={angularLogo} className="logo angular" alt="Angular logo" />
        </a>
      </div>
      <h1>Vite + React + Angular</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React and Angular logos to learn more
      </p>
      <button
        className="testButton"
        onClick={() =>
          (document.querySelector(".testButton").innerHTML = "Congrulations")
        }
      >
        Click Here!
      </button>
    </>
  );
}

export default App;
