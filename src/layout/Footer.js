import React from 'react';
import logo_king_black from './res/logo-king-black.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo-king">
                <img className="logo-king-black" src ={logo_king_black} alt="" />
            </div>
            <div className="footer-inform">
                <p>Інтернет-магазин "МІСТЕР КІНГ"</p>
                <a href="/" className="footer-link"><p>Про нас</p></a>
                <a href="/" className="footer-link"><p>Доставка і оплата</p></a>
                <a href="/" className="footer-link"><p>Контакти</p></a>
                <p>Віталій Дробінський 2021</p>
            </div>
        </footer>
    )
}