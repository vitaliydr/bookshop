import React, { useState } from 'react';

export default function PostBook(props) {

    const {bookItem, addToBasket} = useState('');


    return (
        <div className="contBook">
            <img className="bookImage" src={props.book.cover} alt="" />
            <div className="bookText">
                <h2 className="bookTitle">"{props.book.title}"</h2>
                <p className="bookDesc">{props.book.description}</p>
                <p className="bookPages">Палітурка: {props.book.pages} c., 135x205 мм</p>
            </div>
            <div className="bookBasket">
                <p className="bookPrice">{props.book.price} грн.</p>
                <div className="bookClick" onClick={() => {addToBasket(props.book.id)}}>До кошика</div>
            </div>
        </div>
    )
}