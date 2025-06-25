// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
