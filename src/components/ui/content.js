import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import { Card } from 'antd';


export default function Content({setItemDetails, itemDetails}) {  

  const [products, setProducts] = useState('');

  const productDetails = async() => {
    try{
      const data = await axios.get('https://fakestoreapi.com/products');
      setProducts(data.data);
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    productDetails();
  },[])
  
  console.log(products);

  return (
    <>
    <div className='container'>
         
          <h1 className='category'>women's clothing</h1>
          <div className='row container'>
        {
            products && products.map((data, i) => {
               if(data.category === "women's clothing")
               {
                 return(
      
                  <Card
                  className='card col-xl-2 col-md-4 col-sm-12'

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
            products && products.map((data, i) => {
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
            products && products.map((data, i) => {
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
            products && products.map((data, i) => {
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
    </>
  )
}
