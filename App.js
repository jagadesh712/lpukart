import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages/LoginSignup"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
