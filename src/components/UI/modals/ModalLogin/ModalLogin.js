import React from 'react';
import cl from './ModalLogin.module.css';

export default function ModalLogin({children, visible, setVisible}) {

    const rootClasses = [cl.myModal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <form className={cl.logForm} onClick={(e) => e.stopPropagation()}>
                <h3 className={cl.logTitle}>ВХІД</h3>
                <input className={cl.logInput} type="text" placeholder="Введіть логін" required />
                <input className={cl.logInput} type="password" placeholder="Введіть пароль" required />
                <button className={cl.logButton} onClick={() => setVisible(false)}>Увійти</button>
            </form>
        </div>

        
    )
}
