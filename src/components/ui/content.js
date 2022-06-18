import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";

export default function Content({ setItemDetails, itemDetails }) {
  const [products, setProducts] = useState("");
  const [proDetails, setProDetails] = useState("");

  const productDetails = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);

  return (
    <div className="con-page pb-5">
      <br />
      <br />
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            className="carousel-but rounded-pill active"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="carousel-but rounded-pill"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="carousel-but rounded-pill"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="car-img" class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/free-psd/technology-banner-template_23-2148928991.jpg?w=2000"
              class="d-block h-400 w-100"
              alt="sale"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-psd/neon-banner-template-clothing-store-sale_23-2149001696.jpg?w=2000"
              class="d-block w-100"
              alt="sale"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-psd/e-learning-concept-banner-template_23-2148688187.jpg?w=2000"
              class="d-block w-100"
              alt="sale"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      <div className="container">
        <h1 className="category">
          <span className="category-head">women's</span> clothing
        </h1>
        <div className="row cate container">
          {products &&
            products.map((data, i) => {
              if (data.category === "women's clothing") {
                return (
                  <div
                    className="card col-xl-2 col-md-4 col-sm-6"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setProDetails(data);
                    }}
                  >
                    <img
                      alt="example"
                      src={data.image}
                      style={{ width: 140, height: 150 }}
                    />
                    <p className="cardTitle">{data.title}</p>
                    <h3 className="rate">
                      ${data.price}
                      <span className="rateOff">20%off</span>
                    </h3>
                    <button
                      className="cartBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => {
                        data.qty = 1;
                        data.cost = data.price;
                        setItemDetails((pre) => {
                          return [...pre, { data }];
                        });
                        setTimeout(() => {
                          document.querySelector(".btn-close").click();
                        }, 900);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              }
            })}
        </div>
        <h1 className="category">
          <span className="category-head">Electronics</span>
        </h1>
        <div className="row cate container">
          {products &&
            products.map((data, i) => {
              if (data.category === "electronics") {
                return (
                  <div
                    className="card col-xl-2 col-md-4 col-sm-6"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setProDetails(data);
                    }}
                  >
                    <img
                      alt="example"
                      src={data.image}
                      style={{ width: 140, height: 150 }}
                    />
                    <p className="cardTitle">{data.title}</p>
                    <h3 className="rate">
                      ${data.price}
                      <span className="rateOff">20%off</span>
                    </h3>
                    <button
                      className="cartBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => {
                        data.qty = 1;
                        data.cost = data.price;
                        setItemDetails((pre) => {
                          return [...pre, { data }];
                        });
                        setTimeout(() => {
                          document.querySelector(".btn-close").click();
                        }, 900);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              }
            })}
        </div>
        <h1 className="category">
          <span className="category-head">Jewelery</span>
        </h1>
        <div className="row cate container">
          {products &&
            products.map((data, i) => {
              if (data.category === "jewelery") {
                return (
                  <div
                    className="card col-xl-2 col-md-4 col-sm-6"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setProDetails(data);
                    }}
                  >
                    <img
                      alt="example"
                      src={data.image}
                      style={{ width: 140, height: 150 }}
                    />
                    <p className="cardTitle">{data.title}</p>
                    <h3 className="rate">
                      ${data.price}
                      <span className="rateOff">20%off</span>
                    </h3>
                    <button
                      className="cartBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => {
                        data.qty = 1;
                        data.cost = data.price;
                        setItemDetails((pre) => {
                          return [...pre, { data }];
                        });
                        setTimeout(() => {
                          document.querySelector(".btn-close").click();
                        }, 900);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              }
            })}
        </div>
        <h1 className="category">
          <span className="category-head">Men's</span> clothing
        </h1>
        <div className="row cate container">
          {products &&
            products.map((data, i) => {
              if (data.category === "men's clothing") {
                return (
                  <div
                    className="card col-xl-2 col-md-4 col-sm-6"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setProDetails(data);
                    }}
                  >
                    <img
                      alt="example"
                      src={data.image}
                      style={{ width: 140, height: 150 }}
                    />
                    <p className="cardTitle">{data.title}</p>
                    <h3 className="rate">
                      ${data.price}
                      <span className="rateOff">20%off</span>
                    </h3>
                    <button
                      className="cartBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => {
                        data.qty = 1;
                        data.cost = data.price;
                        setItemDetails((pre) => {
                          return [...pre, { data }];
                        });
                        setTimeout(() => {
                          document.querySelector(".btn-close").click();
                        }, 900);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div
              class="modal-body text-center pt-0 pb-0"
              style={{ justifyContent: "space-between", display: "flex" }}
            >
              <i class="fa-solid fa-check text-success my-auto"> </i>
              <p className=" mb-2 mt-2">Product added to cart</p>
              <button
                type="button"
                class="btn-close my-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {proDetails.title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex">
              <img src={proDetails.image} alt="Product image" className="modalImg"/>
              <div className="my-auto" >
              <p>{proDetails.description}</p>
              <h4>$ {proDetails.price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
