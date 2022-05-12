import React from 'react';
import NavBar from '../ui/navBar';

export default function Cart({setItemDetails, itemDetails, setShow}) {
  return (
    <div>
        <NavBar/>
        {itemDetails.map((data,i)=>{
            return(
                <div className='row container'>
                    <img className='' alt='product' src={data.image}/>
                    <div className=''>
                        <h6>{data.title}</h6>
                        <p>{data.description}</p>
                        <h3>{data.price}</h3>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
