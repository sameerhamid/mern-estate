import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SigIn from "./pages/SigIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="sing-in" element={<SigIn />} />
        <Route path="sing-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
