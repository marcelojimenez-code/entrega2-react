import React from 'react';
import Logo from "../../../assets/img/logo.png";
import './Navbar.css'
import CardWidget from '../../common/Cardwidget/CardWidget';
import {Link} from "react-router-dom";

const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'Inicio',
            url: '/'
        },
        {
            id: 2,
            link: 'Products',
            url: '/products'
        },
        {
            id: 3,
            link: 'Login',
            url: '/login'
        },
    ] 

  return (
    <div>
        <nav className="#263238 blue-grey darken-4" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo"><img src={Logo} className='image' alt="logo"/></a>

            <ul className="right hide-on-med-and-down">

                { links.map(x => 
                    <li key={x.id}><Link className="navbar-item" to={x.url}>{x.link}</Link></li>
                )}  
                <CardWidget />
            </ul>

            <ul id="nav-mobile" className="sidenav">
                { links.map(x => 
                    <li key={x.id}><a href={x.url}>{x.link}</a></li>
                )}  
                <CardWidget />
            </ul>

            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>

            </div>
        </nav>
    </div>
  )
}

export default Navbar
