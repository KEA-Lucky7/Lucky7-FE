import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyblogPage from "./pages/MyblogPage";
import CreatePostPage from "./pages/CreatePostPage";
import FollowPage from "./pages/FollowPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myblog" element={<MyblogPage />} />
        <Route path="/write" element={<CreatePostPage />} />
        <Route path="/follow" element={<FollowPage />} />
      </Routes>
    </div>

  );
}

export default App;
