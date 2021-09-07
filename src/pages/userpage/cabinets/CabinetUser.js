import React, { useState } from 'react';
import { arrBooks } from '../../../arrays/arrBooks';
import HistoryUser from '../../../components/HistoryUser';

export default function CabinetUser() {
    const [books, setBooks] = useState(arrBooks)

    return(
        <div className="contentUser">
            <div className="userInfo">
                <p className="historyTitle">Історія замовлень:</p>
                <p className="historyUserName">Вітаємо, Віталій!</p>   
            </div>
            {books.map(book => 
                <HistoryUser book={book} key={book.id} />
            )}  
        </div>
    )
}