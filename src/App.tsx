import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyblogPage from "./pages/MyblogPage";
import CreatePostPage from "./pages/CreatePostPage";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myblog" element={<MyblogPage />} />
        <Route path="/write" element={<CreatePostPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
