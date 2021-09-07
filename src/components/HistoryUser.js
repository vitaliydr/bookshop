import React from 'react';

export default function HistoryUser(props) {

    return (
            <div className="history">
                <img className="historyBookImg" src={props.book.cover} alt="" />
                <h2 className="historyBookTitle">"{props.book.title}"</h2>
                <p className="historyBookPrice">{props.book.price} грн.</p>
            </div>
    )
}