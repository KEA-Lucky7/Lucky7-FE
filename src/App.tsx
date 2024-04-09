import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyblogPage from "./pages/MyblogPage";
import CreatePostPage from "./pages/CreatePostPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/myblog" element={<MyblogPage />} />
        <Route path="/write" element={<CreatePostPage />} />
      </Routes>
    </div>

  );
}

export default App;
