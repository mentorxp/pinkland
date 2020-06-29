import React, { Component  } from 'react';
import styled from 'styled-components';
//import ProdusLista from './ProdusLista';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../textDescriere';


class Produs extends Component {
    render() {
        const {id, title, img, price, inCart } = this.props.produs; 
        return (
<ProductWrapper className = " col-9 mx-auto col-md col-lg-3">
<div className="card">
    <div className="img-container p-5">
        onClick={() => console.log('you just clicked on this image')}>
        <Link to="/details">
            < img src={img} alt="produs" className="card-img-top" />
        </Link>
    </div>
</div>
</ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div` `



export default Produs;