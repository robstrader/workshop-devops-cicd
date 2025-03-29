import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Counter } from './components/Counter';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a
          href="https://github.com/robstrader/workshop-devops-cicd"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo but red lightning"
          />
        </a>
        <a
          href="https://github.com/robstrader/workshop-devops-cicd"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo but yellow"
          />
        </a>
      </div>
      <h1>CI/CD with Vite, Vitest GitHub Actions and GitHub Pages</h1>
      <Counter />
      <Counter />
    </>
  );
}

export default App;
