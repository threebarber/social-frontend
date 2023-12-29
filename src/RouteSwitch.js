import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import PostsPage from "./pages/PostsPage";
import PostDetail from "./pages/PostDetail";

import TopNav from "./components/TopNav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <TopNav />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
