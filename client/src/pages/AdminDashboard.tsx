import { useEffect } from "react";
import _axios from "../utils/axios.utils";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        await _axios.get("/contact");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        alert("Stop being naughty.");
        navigate("/");
      }
    };

    fetchMessages();
  }, [navigate]);

  return <main>AdminDashboard</main>;
}

export default AdminDashboard;
