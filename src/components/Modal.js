import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from'styled-components';
import {ProductConsumer} from '../textDescriere';
import {Buttondesign} from './Buttonstyle';
import {Link} from 'react-router-dom';

 class Modal extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <ProductConsumer>
                {(value)=> {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price}= value.modalProduct;
                    if (!modalOpen){
                        return null;
                    }
                    else {
                        return (
                        <ModalStyledContainer>
                       <div classNameContainer>
                           <div className="row">
                         <div id="modal"
                         className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                             <h3>Bouquet added to your Cart</h3>
                             <img src={img} className="img-fluid" alt="bouquet"/>
                             <h4>{title}</h4>
                              <h5 className="text-muted">price : £ {price}</h5> 
                              <Link to='/'>
                                  <Buttondesign onClick={()=> closeModal()}>Back To Shopping</Buttondesign>
                                  </Link>  
                                  <Link to='/cart'>
                                      <Buttondesign onClick={()=>
                                         closeModal()}>
                                    Add to Cart
                                      </Buttondesign>
                                      </Link>               
                                       </div>
                           </div>
                       </div>
                        </ModalStyledContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalStyledContainer = styled.div `
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.4);
align-items:center;
justify-content:center;
#modal {
    background: var(--textgreen);
}

`;
export default Modal;