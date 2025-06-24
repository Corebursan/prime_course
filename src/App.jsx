// File: App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CourseManager from "./components/CourseManager";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm mode="login" />} />
            <Route path="/register" element={<AuthForm mode="register" />} />
            <Route path="/*" element={<CourseManager />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
