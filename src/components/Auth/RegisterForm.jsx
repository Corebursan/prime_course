import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', formData);

      alert('Registration successful');
      navigate('/login');
    } catch (err) {
  console.error('Registration error:', err.response?.data || err.message);
  alert('Error registering: ' + (err.response?.data || err.message));
}
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" required />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input" required />
      <button type="submit" className="btn">Register</button>
    </form>
  );
};

export default RegisterForm;
