import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [fields, setFields] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!fields.username || !fields.password) return alert("All fields required");

    try {
      const res = await axios.post('/api/users/login', fields);
      setMsg("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button>Login</button>
      <p>{msg}</p>
    </form>
  );
};

export default Login;
