import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyblogPage from "./pages/MyblogPage";
import CreatePostPage from "./pages/CreatePostPage";
import MainLayout from "./layout/MainLayout";
import PostDetailPage from "./pages/PostDetailPage";
import FinancialLuckPage from "./pages/FinancialLuckPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myblog" element={<MyblogPage />} />
        <Route path="/myblog/:id" element={<PostDetailPage />} />
        <Route path="/write" element={<CreatePostPage />} />
        <Route path="/fortune" element={<FinancialLuckPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
