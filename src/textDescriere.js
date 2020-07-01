import React, { Component } from 'react';
import {databaseFlori, detailProduct} from './data';

const ProductContext = React.createContext(); 
// aici avem furnizor
// aici avem client
export default class ProductProvider extends Component {
    state = {
        products: [],
       detailProduct : detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }
    setProducts = () =>{
        let tempProduse = [];
        databaseFlori.forEach(item => {
            const singleItem = {...item};
            tempProduse = [...tempProduse, singleItem];
        });
        this.setState(()=> {
            return {products:tempProduse};
        });
    };
    handleDetail = () => {
        console.log('hello from detail');
    };
    addToCart = id =>{
        console.log(`aveti in cos.id is ${id}`);
    };
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