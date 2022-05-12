import React from 'react';
import NavBar from './navBar';
import Footer from './footer';
import { products } from '../products/products';
import { Card } from 'antd';

export default function Content({setItemDetails, itemDetails, setShow}) {  

  return (
    <>
      <NavBar products={itemDetails} setShow={setShow}/>
    <div className='container'>
         
          <h1 className='category'>women's clothing</h1>
          <div className='row container'>
        {
            products.map((data, i) => {
               if(data.category === "women's clothing")
               {
                 return(
      
                  <Card
                  className='card col-xl-2 col-md-4 col-sm-12'
                  hoverable
                  cover={<img alt="example" src={data.image} style={{ width: 140, height: 150}}/>}
                >
                  <p className='cardTitle'>{data.title}</p>
                  <h3 className='rate'>${data.price}<span className='rateOff'>20%off</span></h3>
                  <button className='cartBtn' onClick={()=>{
                    setItemDetails((pre)=>{
                      return [...pre, {data}]
                    })
                    console.log(itemDetails)
                  }}>Add to cart</button>
                </Card>
                
                )
               }
            })
        }
        </div>
          <h1 className='category'>Electronics</h1>
          <div className='row container'>
        {
            products.map((data, i) => {
               if(data.category === "electronics")
               {
                 return(
      
                  <Card
                  
                  className='card'
                  hoverable
                  cover={<img alt="example" src={data.image} style={{ width: 140, height: 150}}/>}
                >
                  <p className='cardTitle'>{data.title}</p>
                  <h3 className='rate'>${data.price}<span className='rateOff'>30%off</span></h3>
                  <button className='cartBtn' onClick={()=>{
                    setItemDetails((pre)=>{
                      return [...pre, {data}]
                    })
                    console.log(itemDetails)
                  }}>Add to cart</button>
                </Card>
                
                )
               }
            })
        }
        </div>
          <h1 className='category'>Jewelery</h1>
          <div className='row container'>
        {
            products.map((data, i) => {
               if(data.category === "jewelery")
               {
                 return(
      
                  <Card
                  
                  className='card'
                  hoverable
                  cover={<img alt="example" src={data.image} style={{ width: 140, height: 150}}/>}
                >
                  <p className='cardTitle'>{data.title}</p>
                  <h3 className='rate'>${data.price}<span className='rateOff'>15%off</span></h3>
                  <button className='cartBtn'  onClick={()=>{
                    setItemDetails((pre)=>{
                      return [...pre, {data}]
                    })
                    console.log(itemDetails)
                  }}>Add to cart</button>
                </Card>
                
                )
               }
            })
        }
        </div>
          <h1 className='category'>Men's clothing</h1>
          <div className='row container'>
        {
            products.map((data, i) => {
               if(data.category === "men's clothing")
               {
                 return(
      
                  <Card
                  
                  className='card'
                  hoverable
                  cover={<img alt="example" src={data.image} style={{  width: 140, height: 150 }}/>}
                >
                  <p className='cardTitle'>{data.title}</p>
                  <h3 className='rate'>${data.price}<span className='rateOff'>50%off</span></h3>
                  <button className='cartBtn'  onClick={()=>{
                    setItemDetails((pre)=>{
                      return [...pre, {data}]
                    })
                    console.log(itemDetails)
                  }}>Add to cart</button>
                </Card>
                
                )
               }
            })
        }
        </div>
    </div>
        <Footer/>
    </>
  )
}
