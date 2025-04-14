import React, { useState } from 'react';
import axios from 'axios';

const cities = ['Miami', 'Los Angeles', 'Chicago', 'Houston'];

const Register = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', id: '', email: '', city: '',
    zip: '', username: '', password: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { firstName, lastName, id, email, zip, username, password } = form;
    if (/\d/.test(firstName) || /\d/.test(lastName)) return false;
    if (!/^\d+$/.test(id) || !/^\d+$/.test(zip)) return false;
    if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) return false;
    if (/^\s|\s/.test(username) || /^[^a-zA-Z]/.test(username)) return false;
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/.test(password)) return false;
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return alert("Invalid input");

    try {
      await axios.post('/api/users/register', form);
      alert("Registered successfully");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} placeholder="First Name" />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" />
      <input name="id" onChange={handleChange} placeholder="ID" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <select name="city" onChange={handleChange}>
        <option value="">Select City</option>
        {cities.map(city => <option key={city}>{city}</option>)}
      </select>
      <input name="zip" onChange={handleChange} placeholder="Zip Code" />
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button>Register</button>
    </form>
  );
};

export default Register;
