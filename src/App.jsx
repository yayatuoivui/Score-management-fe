import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./Components/Layout/AppContent";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
