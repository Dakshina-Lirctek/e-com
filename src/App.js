import React,{ useState } from 'react'
import Content from './components/ui/content';
import Cart from './components/cart/cart';
import NavBar from './components/ui/navBar';

export default function App() {
    const [itemDetails, setItemDetails] = useState([]);
    const [show, setShow] = useState(true)
  return (
    <div>
        <NavBar itemDetails={itemDetails} setShow={setShow}/>
       {show?  <Content setItemDetails ={setItemDetails} setShow={setShow} itemDetails = {itemDetails}/> : <Cart setItemDetails={setItemDetails} setShow={setShow} itemDetails = {itemDetails}/>}
    </div>
  )
}
