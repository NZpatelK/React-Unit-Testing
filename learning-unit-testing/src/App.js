import { Routes, Route } from "react-router-dom";
import Test1 from "./TestComponent/TestComponent";
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Test1/> } />
    </Routes>
  </div>
  );
}

export default App;
