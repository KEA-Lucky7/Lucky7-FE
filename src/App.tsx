import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyblogPage from "./pages/MyblogPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/myblog" element={<MyblogPage />} />
      </Routes>
    </div>

  );
}

export default App;
