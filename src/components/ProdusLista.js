import React, { Component } from 'react';
import Produs from './Produs';
import Titlestyle from './Titlestyle';
import {ProductConsumer} from '../textDescriere'


 class ProdusLista extends Component {
     
    render() {
    
        return (
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
<Titlestyle name="Flowers" title="Gallery"/>
                       <div className="row">
                           <ProductConsumer>
                               {value=> {
return value.products.map( produs =>{
return <Produs key="produs.id" produs={produs}
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
export default ProdusLista;