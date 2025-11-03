import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li> {/* Change <a> to <Link> */}
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/aboutus">About Us</Link></li> {/* Change <a> to <Link> */}
          <li><Link to="/Contact">Contact US</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
