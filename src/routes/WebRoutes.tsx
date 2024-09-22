import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

// Rotas web
const CourseSchedule = lazy(() => import("../pages/CourseSchedule"));
const Classroom = lazy(() => import("../pages/Classroom"));
const AreaTeacher = lazy(() => import("../pages/AreaTeacher"));

// Rotas Sign
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const LostPassword = lazy(() => import("../pages/LostPassword"));

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseSchedule />} />
        <Route path="classroom" element={<Classroom />} />
        <Route path="areaTeacher" element={<AreaTeacher />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="lostPassword" element={<LostPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
