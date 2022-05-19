// import "./App.css";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return <div>Hello dunia</div>;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
