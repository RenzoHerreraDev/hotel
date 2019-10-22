import React , {Component}from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


class NabBar extends Component {
    state={

        isOpen: false
    }
    handleToggle =() =>{

        this.setState({ isOpen: !this.state.isOpen})
    }

    render(){

        return   <nab className="navbar" >
                    <div className="nav-center">
                         <div className="nav-header">
                            <Link to="/hotel">
                                <img src={logo} alt="Brach Resort" />
                            </Link>
                            <button type="button" className="nav-btn" 
                            onClick={this.handleToggle} >
                            <FaAlignRight  className="nav-icon" />
                            </button>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"  }>
                        <li>
                            <Link to="/hotel">Inicio </Link>
                        </li>        
                        <li>
                            <Link to="/hotel/rooms">Habitaciones </Link>
                        </li>     
                         <li>
                            <Link to="/hotel/FormNew">Cargar habitacion</Link>
                         </li>               
                        </ul>
                        
                    </div>
                </nab>   
  }
 
}


export default NabBar;
