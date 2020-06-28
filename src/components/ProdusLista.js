import React, { Component } from 'react';
import Produs from './Produs';
import Titlestyle from './Titlestyle';


 class ProdusLista extends Component {
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
export default ProdusLista;