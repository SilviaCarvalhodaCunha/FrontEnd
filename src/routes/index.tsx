import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { DashboardPage } from "../pages/Dashboard";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
