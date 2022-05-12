import React from "react";
import { Badge } from 'antd';

export default function NavBar({setShow, itemDetails}) {

  function handleClick() {
    console.log('hiii')
    setShow(false)
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
        <div class="container">
          <h3 className="cm-logo">Suriya Shop</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="">
              <i class="fa-solid fa-align-justify"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="input-group searchbar">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary searchbut"
                type="button"
                id="button-addon2"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-4" onClick={()=>{setShow(true); console.log('hello')}}>
                Home<i class="fa-solid fa-house-chimney-window"></i>
              </li>
              <li className="nav-item pe-4"  onClick={handleClick}>
              <Badge count={itemDetails.length} style={{backgroundColor:"red", padding:5, borderRadius:80}}>
                Cart<i class="fa-solid fa-cart-shopping ps-2"></i>
              </Badge>
              </li>
              <li className="nav-item pe-4">
                More<i class="fa-solid fa-chevron-down ps-2"></i>
              </li>
              <li className="nav-item pe-4">
                LOGIN<i class="fa-solid fa-right-to-bracket ps-2"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
