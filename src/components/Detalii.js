import React, { Component } from 'react';
import {ProductConsumer} from '../textDescriere';
import {Link} from 'react-router-dom';
import {Buttondesign} from './Buttonstyle';
 

class Detalii extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value)=> {
                    const { id, company, img, info, price, title, inCart }=value.detailProduct;
                   return(
                       <div className="container py5">
                           {/* title */}
                           <div className="row">
                               <div className="col-10 mx-auto text-center my-5" >
                                   <h1>{title}</h1>

                               </div>
                            
                           </div>
                  {/* end title*/}
                {/* detali Produs */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="imagine-fluid" alt="flori"/>

                    </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4 className="text-title text-muted mt-3 mb-2">selled by {company} <h4 className="text-White"><strong>£{price}</strong></h4></h4>  </div>      
                             </div>

                       </div>
                   )
                }}
            </ProductConsumer>
        )
    }
}
export default Detalii;