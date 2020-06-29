import React, { Component  } from 'react';
import styled from 'styled-components';
//import ProdusLista from './ProdusLista';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../textDescriere';
import { Buttondesign } from './Buttonstyle';


class Produs extends Component {
    render() {
        const {id, title, img, price, inCart } = this.props.produs; 
        return (
<ProductWrapper className = " col-9 mx-auto col-md col-lg-3">
<div className="card">
    <div className="img-container mx-5">
        onClick={() => console.log('you just clicked on this image')}>
        <Link to="/details">
            < img src={img} alt="produs" className="card-img-top" />
        </Link>
        <Buttondesign className="cart-button" disabled={inCart ? true : false}
         onClick={()=>{console.log("produsul este adaugat in cos");}}>
        {inCart ? (<p className="text-capitalize mb-0" disabled>{" "}
         Adaugat In Cos</p>):(<i className="fas fa-shopping-basket"/>)}
          </Buttondesign>
    </div>
    <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">{title}</p>
        <h5 className="price">£ <span>{price}</span></h5>

    </div>
</div>
</ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div` `



export default Produs;