import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import OTP from "./pages/otp";

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(!isAuthenticated){
      navigate("/login")
    }
  }, [isAuthenticated])

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      setIsAuthenticated(true);
      navigate("/"); 
    } else {
      setIsAuthenticated(false);
      // navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </>
  );
};

export default App;
