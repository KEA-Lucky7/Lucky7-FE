import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyblogPage from "./pages/MyblogPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myblog" element={<MyblogPage />} />
      </Routes>
    </div>

  );
}

export default App;
