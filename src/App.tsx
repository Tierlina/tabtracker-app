import { Route, Routes } from "react-router-dom";

import SignupPage from "./pages/signup";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import AddTabPage from "@/pages/addTab";
import AboutPage from "@/pages/about";
import LoginPage from "@/pages/login";
import DashboardPage from "@/pages/dashboard";

function App() {
  return (
    <Routes>
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<AddTabPage />} path="/addTab" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
