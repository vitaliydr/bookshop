import React from 'react';
import cl from './ModalBuy.module.css';

export default function ModalBuy({visible, setVisible}) {

    const rootClasses = [cl.myModal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.buyThanks} onClick={(e) => e.stopPropagation()}>
                <h3 className={cl.buyTitle}>Дякуємо за покупку!</h3>
                <p className={cl.modalBuyText}>Вам на пошту надіслано лист із підтвердженням замовлення</p>
                <div className={cl.buyButton} onClick={() => setVisible(false)}>Добре</div>
            </div>
        </div>

        
    )
}
