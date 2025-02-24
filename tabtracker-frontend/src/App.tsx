import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LoginPage from"@/pages/login";
import DashboardPage from"@/pages/dashboard";

import SignupPage from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route element={<DashboardPage/>} path="/dashboard" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
