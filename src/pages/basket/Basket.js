import React, { useState } from 'react';
import ModalBuy from '../../components/UI/modals/ModalBuy/ModalBuy';
import './Basket.css';

export default function Basket() {
    const [modalBuy, setModalBuy] = useState(false)

    return (
        <div className="containerBasket">
            <ModalBuy visible={modalBuy} setVisible={setModalBuy} />
            <div className="pageLineBasket">
                <div className="pageMarkerBasket"></div>
            </div>
            <div className="contentBasket">
                <div className="basket">
                    <img className="basketBookImg" src="https://bookclub.ua/images/db/goods/k/56087_108879_k.jpg" alt="" />
                    <h2 className="basketBookTitle">"11/22/63"</h2>
                    <p className="basketBookPrice">230 грн.</p>
                    <div className="basketBookDel">Видалити</div>
                </div>
                <div className="basketBuy"  onClick={() => setModalBuy(true)}>
                    <p>ОФОРМИТИ ЗАМОВЛЕННЯ</p>
                </div>
            </div>
        </div>
    )
}