import React, { useState } from 'react';
import { arrBooks } from '../../../arrays/arrBooks';
import EditBook from '../../../components/EditBook';
import ModalAddBook from '../../../components/UI/modals/ModalAddBook/ModalAddBook';

export default function CabinetSuperUser() {
    const [books, setBooks] = useState(arrBooks)
    const [modalAddBook, setModalAddBook] = useState(false)

    const createBook = (newBook) => {
        setBooks([...books, newBook])
    }

    const removeBook = (book) => {
        setBooks(books.filter(p => p.id !== book.id))
    }

    if (!books.length) {
        return(
            <div className="contentUser">
                <ModalAddBook create={createBook} visible={modalAddBook} setVisible={setModalAddBook} />
                    <div className="addBook" onClick={() => setModalAddBook(true)}>
                        <p>ДОДАТИ КНИГУ</p>
                    </div>
                    <div className="noBooks">КНИГ НЕМАЄ</div>
            </div>
        )
    }

    return(
        <div className="contentUser">
            <ModalAddBook create={createBook} visible={modalAddBook} setVisible={setModalAddBook} />
            <div className="addBook" onClick={() => setModalAddBook(true)}>
                <p>ДОДАТИ КНИГУ</p>
            </div>
            {books.map(book => 
                <EditBook remove={removeBook} book={book} key={book.id} />
            )}

              
        </div>
    )
}