import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid login credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input" required />
      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default LoginForm;