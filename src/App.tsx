import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyblogPage from "./pages/MyblogPage";
import CreatePostPage from "./pages/CreatePostPage";
import MainLayout from "./layout/MainLayout";
<<<<<<< HEAD
import PostDetalPage from "./pages/PostDetalPage";
=======
import FinancialLuckPage from "./pages/FinancialLuckPage";
>>>>>>> 659d261f62b1088b70c0a00e68c2c3e7440323c7

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myblog" element={<MyblogPage />} />
        <Route path="/myblog/:id" element={<PostDetalPage />} />
        <Route path="/write" element={<CreatePostPage />} />
<<<<<<< HEAD

=======
        <Route path="/fortune" element={<FinancialLuckPage />} />
>>>>>>> 659d261f62b1088b70c0a00e68c2c3e7440323c7
      </Routes>
    </MainLayout>
  );
}

export default App;
