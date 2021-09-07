import React from 'react';

export default function EditBook(props) {

    return (
        <div className="userContBook">
            <img className="bookImage" src={props.book.cover} alt="" />
            <div className="bookText">
                <h2 className="bookTitle">"{props.book.title}"</h2>
                <p className="bookDesc">{props.book.description}</p>
                <p className="bookPages">Палітурка: {props.book.pages} c., 135x205 мм</p>
            </div>
            <div className="bookBasket">
                <p className="bookPrice">{props.book.price} грн.</p>
                <div className="bookClick" onClick={() => props.remove(props.book)}><span>Видалити</span></div>
            </div>
        </div>
    )
}