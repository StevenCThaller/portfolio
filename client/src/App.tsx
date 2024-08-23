import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import "./styles/App.css";
import {
  AboutPage,
  AdminDashboard,
  AdminLogin,
  ContactPage,
  LandingPage,
  ProjectsPage,
  WorkPage,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <div className="background-container"></div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
