import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

export default function Navbar() {

  return <div class="ui menu">
    <Link className="item" to="/">Home</Link>
    <Link className="item" to="/product">Products</Link>
    <Link className="item" to="/cart">Cart</Link>
  <div class="right menu">
    <a class="item">Sign Up</a>
    <a class="item active">Help</a>
  </div>
</div>
}