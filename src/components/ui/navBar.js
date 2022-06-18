import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({itemDetails}) {

  const [icon, setIcon] = useState(true)

return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
        <span className='logo-name' style={{color:"white"}}>
        <img className='logo' src='https://www.freepnglogos.com/uploads/shopping-bag-png/shopping-bag-plaseto-bag-plaseto-bags-manufacturer-west-bengal-17.png' alt='logo'/>
         SURIYA SHOP</span>
        <button className="navbar-toggler navbut" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        {
          icon ? <i onClick={()=>setIcon(!icon)} className="fa-solid fa-bars" style={{color: "white"}}></i> : <i onClick={()=>setIcon(!icon)} className="fa-solid fa-angles-up" style={{color: "white"}}></i>
        }
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ps-2 pe-2">
              <Link className='link-design' to='/'>
              <span style={{color:"white"}}><i className="fa-solid fa-house me-2"></i>Home</span>
              </Link>
            </li>
            <li className="nav-item ps-2 pe-2">
              <Link className='link-design' to="cart">
              <span style={{color:"white"}}><i className="fa-solid fa-cart-shopping me-2"></i>Cart{itemDetails.length === 0 ?'':<span className='cart-badge'>{itemDetails.length}</span>}</span>
              </Link>
            </li>
          </ul>
          
          </div>
      </div>

      </nav>
      
    </>
  );
}
