import React, { Component } from 'react';
import {databaseFlori, detailProduct} from './data';

const ProductContext = React.createContext(); 
// aici avem furnizor
// aici avem client
export default class ProductProvider extends Component {
    state = {
        products:databaseFlori,
        detailProduct: detailProduct
    }
    handleDetail = () => {
        console.log('hello from detail');
    }
    addToCart = () =>{
        console.log('hello from add to Coscump');
    }
    render() {
        return (
            <div>
                <ProductContext.Provider value= {{...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart}}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};