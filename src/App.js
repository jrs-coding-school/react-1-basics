import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/functionComponents/FunctionComponent';
import ArrowFunctionComponent from './components/functionComponents/ArrowFunctionComponent';
import UsingJSX from './components/JSX/UsingJSX';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>Function Component:</h2>
      <FunctionComponent />

      <h2>Arrow Function Component:</h2>
      <ArrowFunctionComponent />

      <h2>Using JSX:</h2>
      <UsingJSX />

      <h3>
        Practice making a component. Then put the component in the App component as if it were a regular HTML element
      </h3>
    </div>
  );
}

export default App;
