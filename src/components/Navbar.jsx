import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-black text-yellow-400">
      <div className="container nav-container mx-auto flex justify-between items-center p-4">
        <div className="logo text-2xl font-bold tracking-wide">
          <Link to="/">TopKasb.uz</Link>
        </div>
        <ul className="nav-links flex space-x-6 text-lg">
          <li><Link to="/" >Asosiy</Link></li>
          <li><Link to="/test" >Kasb Testi</Link></li>
          <li><Link to="/kasblar" >Kasblar</Link></li>
          <li><Link to="/loyihalar" >Maqolalar</Link></li>
          <li><Link to="/about" >Biz haqimizda</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
