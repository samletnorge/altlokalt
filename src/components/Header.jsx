import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-area header-absolute">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            <a href="/" className="logo">
                                <img src="assets/images/logo.png" alt="" />
                            </a>

                            <ul className="nav">
                                <li><Link className="active" to="/">Home</Link></li>
                                <li> <Link  to="/about">About</Link></li>
                                <li><Link to="/deals">Deals</Link></li>
                                <li><Link to="/reservation">reservation</Link></li>
                                <li><Link to="/reservation">Book Yours</Link></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header