import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logoPink from '../logoPink.png';
import "bootstrap/dist/css/bootstrap.min.css";

import {Buttondesign} from './Buttonstyle';




class Navbar extends Component {
    render() {
        return(
        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
        {/* ....*/} <Link to="/"> 
           <img src={logoPink} alt="imagine" className="navbar-brand" />
           </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5>">
                <Link to="/" className="nav-link"></Link>
            </li>
        </ul>
        <Link to='/cart' className="ml-auto">
            <Buttondesign>
                <span className="mr-2"></span>
                <i className="fas fa-shopping-basket" /> Your Cart
            </Buttondesign>
        </Link>

        </nav>
        
            
        )
    }
}
export default Navbar;