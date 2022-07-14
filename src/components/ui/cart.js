import React, { useEffect, useState } from "react";
import Countbtn from "./count-btn";
import { useNavigate } from "react-router-dom";

export default function Cart({ itemDetails, setItemDetails }) {
  let navigate = useNavigate();
  const [total, setTotal] = useState([]);
  const [amt, setAmt] = useState(0);
  const [noItem, setNoItem] = useState([]);
  const [fitem, setFitem] = useState(0);

  const removeItem = (id) => {
    setItemDetails((pre) => {
      return pre.filter((pro) => pro.data.id !== id);
    });
  };

  useEffect(() => {
    setTotal(
      itemDetails.map((it) => {
        return it.data.cost;
      })
    );

    setNoItem(
      itemDetails.map((it) => {
        return it.data.qty;
      })
    );

    const totalPrice = Math.ceil(
      total.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    );
    setAmt(totalPrice);

    const totalItem = Math.ceil(
      noItem.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    );
    setFitem(totalItem);
  }, [total]);

  return (
    <div className="cartCon pt-5 pb-5">
      <div className="cart d-flex">
        <div className="container mt-5 mb-5 me-2 text-start bg-light">
          {itemDetails.length === 0 ? (
            <h1 className="empty-title">Your cart is Empty</h1>
          ) : (
            <h1>Shopping cart</h1>
          )}
          <hr></hr>
          {itemDetails.length === 0 ? (
            <div className="">
              {" "}
              <div className="empty-cart">
                <img
                  src="https://shop.millenniumbooksource.com/static/images/cart1.png"
                  alt=""
                  width={400}
                />
              </div>
              <div className="empty-cart-button">
                <button onClick={() => navigate("/")}>Shop now</button>
              </div>
            </div>
          ) : null}
          {itemDetails &&
            itemDetails.map((item, i) => {
              return (
                <div className="container">
                  <div className="cart-card row">
                    <img
                      alt="product-img"
                      className="cart-img col-xl-4 col-md-4 col-sm-12 container"
                      src={item.data.image}
                    />
                    <div className="product-info col-xl-8 col-md-8 col-sm-12 container">
                      <h5>{item.data.title}</h5>
                      <Countbtn
                        price={item.data.price}
                        idx={i}
                        itemDetails={itemDetails}
                        setItemDetails={setItemDetails}
                      />
                      <button
                        className="cartBtn"
                        onClick={() => {
                          removeItem(item.data.id);
                        }}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
        </div>
        <div className="container pt-2 mt-5 cart-total bg-light">
          <h3 className="text-start">Price Details</h3>
          <hr />
          <span className="text-start">Price({fitem + " " + "item"})</span>
          <span className="float-end">${amt}</span>
          <br />
          <span className="text-start">Delivery charge</span>
          <span className="float-end">Free</span>
          <hr />
          <span className="text-start">Total</span>
          <span className="float-end">{amt}</span>
        </div>
      </div>
    </div>
  );
}
