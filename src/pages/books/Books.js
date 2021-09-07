import React, { useState } from 'react';
import PostBook from '../../components/PostBook';
import './Books.css';
import { arrBooks } from '../../arrays/arrBooks';

export default function Books() {
    const [books, setBooks] = useState(arrBooks)

    return(
        <div className="containerBooks">
            <div className="pageLineBooks">
                <div className="pageMarkerBooks"></div>
            </div>
            <div className="contentBooks">
                {books.map(book => 
                    <PostBook book={book} key={book.id} />
                )}  
            </div>
        </div>
    )
}