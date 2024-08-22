import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import "./styles/App.css";
import { AboutPage, ContactPage, LandingPage } from "./pages";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <>
      <div className="background-container"></div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
