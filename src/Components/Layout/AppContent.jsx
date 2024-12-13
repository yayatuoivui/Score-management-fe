import { useLocation } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import TopNavBar from "../TopNavBar/TopNavBar";
import AppRoutes from "../../routes/AppRoutes";

const AppContent = () => {
  const location = useLocation();

  const protectedPaths = [
    "/admin",
    "/admin/users",
    "/admin/dashboard",
    "/admin/permissions",
    "/admin/roles",
    "/employee/account-settings",
  ];

  const studentPaths = ["/ket-qua-hoc-tap", "/nhap-diem", "/login"];


  const shouldHideLayout = () => {
    return (
      ["/404", ...protectedPaths].includes(location.pathname) ||
      studentPaths.some((path) => location.pathname.startsWith(path))
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout() && (
        <>
          <TopNavBar />
          <Navbar />
        </>
      )}
      <main className="flex-1">
        <AppRoutes />
      </main>
      {!shouldHideLayout() && (
        <>
          <Footer />
        </>
      )}
    </div>
  );
};

export default AppContent;
