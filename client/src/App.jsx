
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
// import ContactUs from "./components/ContactUs";
import ContactUs from './components/Contactus';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <Header onLogout={handleLogout} />}
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register onToggle={() => {}} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<CreateItem />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;















