import React, { Component } from 'react';
import Product from './Product';
import Titlestyle from './Titlestyle';


 class ProductList extends Component {
     state={
         products:[]
     }
    render() {
        return (
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
<Titlestyle name="Flowers" title="Gallery"/>
                       <div className="row">
                           
                       </div>

                   </div>
               </div>

           </React.Fragment> 
        )
    }
}
export default ProductList;