import React from 'react';
import { Link } from 'react-router-dom';
import logo_king from './res/logo-king.png';
import './Header.css';

export default function Header() {

    return(
        <header>
            <div className="logo-king">
                <img className="logo-king-white" src ={logo_king} alt="" />
            </div>
            <div className="navigation">
                <Link to="/home"><div className={`nav-head `}><p>ГОЛОВНА</p></div></Link>
                <Link to="/books"><div className={`nav-head `}><p>КНИГИ</p></div></Link>
                <Link to="/basket"><div className={`nav-head `}><p>КОШИК</p></div></Link>
                <Link to="/userpage"><div className={`nav-head `}><p>КАБІНЕТ</p></div></Link>
                <Link to="/about"><div className={`nav-head `}><p>ПРО АВТОРА</p></div></Link>
            </div>
        </header>
    )
}