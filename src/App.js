import React, { useState } from 'react';
import NavBar from './components/ui/navBar';
import Content from './components/ui/content';
import Footer from './components/ui/footer';
import Cart from './components/ui/cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default function App() {
    const [itemDetails, setItemDetails] = useState([])
  return (
    <div>
        
        <Router>

        <NavBar itemDetails={itemDetails}/>
          
          <Routes>
          <Route exact path='/' element={<Content itemDetails={itemDetails} setItemDetails={setItemDetails} />}></Route>
          <Route exact path='/cart' element={< Cart  itemDetails={itemDetails} setItemDetails={setItemDetails} />}></Route>           
          </Routes>

        </Router>

        <Footer/>

    </div>
  )
}
