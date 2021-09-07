import React, {  useState} from 'react';
import cl from './ModalAddBook.module.css';

export default function ModalAddBook({create, children, visible, setVisible}) {

    const rootClasses = [cl.myModal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    const [post, setPost] = useState({title:'', description:'', price:'', pages:'', cover:''})

    const addNewBook = (e) => {
        e.preventDefault();
        const newBook = {...post, id: Date.now()}
        create(newBook)
        setPost({title:'', description:'', price:'', pages:'', cover:''})
        setVisible(false)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <form className={cl.addForm} onClick={(e) => e.stopPropagation()}>
                <h3 className={cl.addTitle}>ДОДАВАННЯ НОВОЇ КНИГИ</h3>
                <input className={cl.addInput} value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} type="text" placeholder="Назва" required />
                <input className={cl.addInput} value={post.description} onChange={(e) => setPost({...post, description: e.target.value})} type="text" placeholder="Опис" required />
                <input className={cl.addInput} value={post.price} onChange={(e) => setPost({...post, price: e.target.value})} type="number" placeholder="Ціна" required />
                <input className={cl.addInput} value={post.pages} onChange={(e) => setPost({...post, pages: e.target.value})} type="number" placeholder="Кількість сторінок" required />
                <input className={cl.addInput} value={post.cover} onChange={(e) => setPost({...post, cover: e.target.value})} type="url" placeholder="Посилання обкладинки" required />
                <button className={cl.addButton} onClick={addNewBook }>Додати книгу</button>
            </form>
        </div>  
    )
}
