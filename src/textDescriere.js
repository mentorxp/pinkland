import React, { Component } from 'react';
import {databaseFlori, detailProduct} from './data';

const ProductContext = React.createContext(); 
// aici avem furnizor
// aici avem client
export default class ProductProvider extends Component {
    state = {
        products: [],
       detailProduct : detailProduct,
       cart:[],
       modalOpen: true,
       modalProduct : detailProduct,
    };

    componentDidMount(){
        this.setProducts();
    }
    setProducts = () =>{
        let tempProducts = [];
        databaseFlori.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=> {
            return {products : tempProducts};
        });
    };

    getItemProduct = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetailProduct = id => {
        const product = this.getItemProduct(id);
        this.setState (() => {
            return {detailProduct : product};
        });
    };
    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItemProduct(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            ()=>{
            return {products : tempProducts, cart : [...this.state.cart, product]};
        },
        () =>{
        console.log(this.state);
    });
    };

    openModal = id => {
        const product = this.getItemProduct(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen:true}
        } )
    }

    closeModal = () => {
        this.setState(()=>{
            return {modalOpen:false}
        })
    }


    render() {
        return (
            <div>
                <ProductContext.Provider value= {{
                    ...this.state,
                handleDetailProduct: this.handleDetailProduct,
                addToCart: this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};