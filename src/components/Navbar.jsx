import React from 'react';
import shopping from '../assets/products/shopping-cart.png';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm px-15 lg:px-20">
  <div className="navbar-start">
    <div>
        <a className="btn btn-ghost normal-case text-2xl font-bold text-primary">DigiTools</a>
    </div>
   
    <div className="dropdown block lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center flex gap-6 list-none hidden lg:flex px-15 lg:px-20">
    
        <li className='hover:text-purple-900 cursor-pointer '><a>Products</a></li>
        <li className='hover:text-purple-900 cursor-pointer '><a>Features</a></li>
        <li className='hover:text-purple-900 cursor-pointer '><a>Pricing</a></li>
        <li className='hover:text-purple-900 cursor-pointer '><a>Testimonials</a></li>
        <li className='hover:text-purple-900 cursor-pointer '><a>FAQ</a></li>
  </div>
  <div className="navbar-end gap-2">
     <img className=' Shopping Cart w-5 h-5' src={shopping} alt="Shopping Cart" />
     <p>Loging</p>
    <a className="btn btn-primary rounded-3xl">Get Started</a>
    
  </div>
</div>
    );
};

export default Navbar;