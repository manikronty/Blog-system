import React from 'react';
import '../index.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">MyBlog</div>
    <ul className="navbar-links">
      <li>Articles</li>
      <li>About</li>
      <li>Resources</li>
      <li>Categories</li>
    </ul>
    <div className="navbar-actions">
      <button className="login-btn">Log In</button>
      <button className="trial-btn">Add Article</button>
    </div>
  </nav>
);

export default Navbar;