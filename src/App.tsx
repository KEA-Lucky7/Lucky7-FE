import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyblogPage from "./pages/MyblogPage";
import CreatePostPage from "./pages/CreatePostPage";
import MainLayout from "./layout/MainLayout";
import PostDetailPage from "./pages/PostDetailPage";
import FinancialLuckPage from "./pages/FinancialLuckPage";
import ReportPage from "./pages/ReportPage";
import SettingPage from "./pages/SettingPage";
import LoginRedirect from "./components/homePage/login/LoginRedirect";
import Login from "./components/homePage/login/Login";
import LoginInfo from "./components/homePage/login/LoginInfo";
import SearchPage from "./pages/SearchPage";
import LikePage from "./pages/LikePage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route path="/login" element={<Login />} />
          <Route path="/login/redirect" element={<LoginRedirect />} />
          <Route path="/login/info" element={<LoginInfo />} />
        </Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/fortune" element={<FinancialLuckPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/blog/:blogId" element={<MyblogPage />} />
        <Route path="/blog/:blogId/:postId" element={<PostDetailPage />} />
        <Route path="/write" element={<CreatePostPage />} />
        <Route path="/report/*" element={<ReportPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
