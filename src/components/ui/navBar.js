import React from 'react';
import { Badge } from 'antd';
import { Link } from 'react-router-dom'

export default function NavBar({itemDetails}) {


return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <div class="container">
        <span style={{color:"white"}}>SURIYA SHOP</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex">
        <input class="form-control me-2" type="search" className="searchbar" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" className="searchbut" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <span style={{color:"white"}}><i class="fa-solid fa-house me-2"></i>Home</span>
            </li>
            <li class="nav-item ps-2">
              
              <Badge count={itemDetails.length} style={{backgroundColor:'red',padding:5,borderRadius:50,color:"whitesmoke"}}><span style={{color:"white"}}><i class="fa-solid fa-cart-shopping me-2"></i>Cart</span></Badge>
            
            </li>
            {/* <li><Link>hi</Link></li> */}
          </ul>
          </div>
      </div>

      </nav>
      
    </>
  );
}
