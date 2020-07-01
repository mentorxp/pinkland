import React, { Component } from "react";
import { ProductConsumer } from "../textDescriere";
import { Link } from "react-router-dom";
import { Buttondesign } from "./Buttonstyle";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title*/}
              {/* detalii Produs */}

              <div className="row">
                <div className="col-10 mx-auto col-md-4 my-3 text-capitalize">
                  <img src={img} className="imagine-fluid" alt="flori" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2 className="text-title text-muted mt-3 mb-2 var">
                    <span className="text-White">Online Store: {company} </span>
                  </h2>{" "}
                  <h4 className="text-White">
                    <strong>£{price}</strong>
                  </h4>{" "}
                </div>
                <p className="text-muted lead">
                  <span className="text-White">{info}</span>
                </p>
                {/* buttons area */}
                <Link to="/">
                  <Buttondesign>Back to Shopping</Buttondesign>
                </Link>
               <Buttondesign
                
                 disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                  {inCart ? "inCart" : "Add to Cart"}
                </Buttondesign>


              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default Details;
