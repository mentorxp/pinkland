import React, { Component } from 'react';
import Product from './Produs';
import Titlestyle from './Titlestyle';
import {ProductConsumer} from '../textDescriere'


 class ProductList extends Component {
     
    render() {
    
        return (
           <React.Fragment>
               <div className="my-9">
                   <div className="container">
<Titlestyle name="Flowers" title="Gallery"/>
                       <div className="row">
                           
                           <ProductConsumer>
                               {value=> {
return value.products.map( product =>{
return <Product key="product.id" product={product}
/>;
})
                               }}
                           </ProductConsumer>
                       </div>

                   </div>
               </div>

           </React.Fragment> 
        )
    }
}
export default ProductList;