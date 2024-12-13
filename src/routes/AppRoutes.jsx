import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import NotFoundPage from "../Pages/404Page/NotFoundPage";
import ScoreResult from "../Pages/UserScreen/ScoreResult/ScoreResult";
import StudentLayout from "../Components/Layout/StudentLayout";
import InputScore from "../Pages/UserScreen/InputScore/InputScore";
const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      {/* Student Routes */}
      <Route element={<StudentLayout />}>
        <Route path="/ket-qua-hoc-tap" element={<ScoreResult />} />
        <Route path="/nhap-diem" element={<InputScore />} />
      </Route>

      {/* Error Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoute;
