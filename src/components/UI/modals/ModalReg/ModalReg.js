import React from 'react';
import cl from './ModalReg.module.css';

export default function ModalReg({children, visible, setVisible}) {

    const rootClasses = [cl.myModal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <form className={cl.regForm} onClick={(e) => e.stopPropagation()}>
                <h3 className={cl.regTitle}>РЕЄСТРАЦІЯ</h3>
                <input className={cl.regInput} type="email" placeholder="Введіть пошту" required />
                <input className={cl.regInput} type="password" placeholder="Введіть пароль" required />
                <input className={cl.regInput} type="password" placeholder="Повторіть пароль" required />
                <button className={cl.regButton} onClick={() => setVisible(false)}>Зареєструватися</button>
            </form>
        </div>

        
    )
}
