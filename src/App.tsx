import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CourseSchedule from "./pages/CourseSchedule/index.tsx";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import Classroom from "./pages/Classroom/index.tsx";
import LostPassword from "./pages/LostPassword/index.tsx";
import AreaTeacher from "./pages/AreaTeacher/index.tsx";
import NotFoundPage from "./pages/NotFoundPage/index.tsx";
import "./variables.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CourseSchedule />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/classroom",
    element: <Classroom />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/lostPassword",
    element: <LostPassword />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/areaTeacher",
    element: <AreaTeacher />,
    errorElement: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
