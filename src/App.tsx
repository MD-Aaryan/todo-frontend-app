import { Navigate, Outlet, Route, Routes } from "react-router";
import TodoApp from "./pages/TodoApp";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<TodoApp />} />
      </Route>
    </Routes>
  );
}
//protected routes inside todoapp
