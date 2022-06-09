import React, { useEffect, useState } from 'react';
import Countbtn from './count-btn';

export default function Cart({itemDetails, setItemDetails}) {
  
  const [total, setTotal] = useState([]);
  const [amt, setAmt] = useState(0)

  const removeItem = (id) => {
    setItemDetails((pre)=>{
      return pre.filter((pro)=>(
        pro.data.id !== id
      ))
    })
  }


useEffect(()=>{
  setTotal(itemDetails.map((it)=>{
    return (it.data.cost)
  })) 

  const totalPrice = Math.ceil(total.reduce(
    (previousValue, currentValue)=>previousValue+currentValue, 
    0))
   setAmt(totalPrice)
  },[total])


  return (
    <div className='cartCon pt-5 pb-5'>
    <div className='cart d-flex'>
         <div className='container mt-5 mb-5 me-2 text-start bg-light'>
      
            {itemDetails.length === 0 ? <h1>Your cart is Empty</h1> : <h1>Your cart</h1>}
            <hr></hr>
            {
              itemDetails && itemDetails.map((item, i)=>{
                return(
                <div className='container'>
                <div
                className='cart-card row'
                >
                  <img alt='product-img' className='cart-img col-xl-4 col-md-4 col-sm-12 container' src={item.data.image}/>
                  <div className='product-info col-xl-8 col-md-8 col-sm-12 container'>
                    <h5>{ item.data.title }</h5>
                    <Countbtn price={item.data.price} idx={i} itemDetails={itemDetails} setItemDetails={setItemDetails}/>
                    <button className='cartBtn' onClick={()=>{removeItem(item.data.id)}}>Remove from cart</button>
                  </div>
                  
                </div>
                <hr></hr>
                </div>
                )
              })
            }
          </div>
          <div className='container pt-2 mt-5 cart-total bg-light'>
            <h3 className='text-start'>Price Details</h3><hr/>
            <span className='text-start'>Price({itemDetails.length + "item"})</span><span className='float-end'>${amt}</span><br/>
            <span className='text-start'>Delivery charge</span><span className='float-end'>Free</span><hr/>
            <h5 className='text-end'>total:${amt}</h5>

          </div>
    </div>
    </div>
  )
}
