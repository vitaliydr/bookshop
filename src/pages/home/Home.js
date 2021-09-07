import React, { useState } from 'react';
import ModalLogin from '../../components/UI/modals/ModalLogin/ModalLogin';
import ModalReg from '../../components/UI/modals/ModalReg/ModalReg';
import './Home.css';

export default function Home() {

    // const [users, setUsers] = useState([
    //     {id: 1, name: 'Віктор', phone:'+380634565937', login: 'frew', password: '12345'},
    //     {id: 2, name: 'Микола', phone:'+380634565937', login: 'ьаок', password: '12345'},
    //     {id: 3, name: 'Соломія', phone:'+380634565937', login: 'ідушл', password: '12345'}
    // ])

    const [modalReg, setModalReg] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)

    // const createUser = (newUser) => {
    //     setUsers([...users, newUser])
    //     setModalReg(false)
    // }

    return(
        <div className="container">
            <ModalReg visible={modalReg} setVisible={setModalReg} />
            <ModalLogin visible={modalLogin} setVisible={setModalLogin} />
            <div className="pageLine">
                <div className="pageMarker"></div>
            </div>
            <div className="content">
                <div className="contentNews">
                    <div className="contentNewsTitle">
                        <h2>Наша рекомендація!</h2>
                    </div>
                    <div className="contentNewsContent">
                        <div className="contentNewsImage">
                            <img className="recomBook" src = "https://bookclub.ua/images/db/goods/k/56087_108879_k.jpg" alt="" />
                        </div>
                        <div className="contentNewsText">
                            <h3>"11/22/63"</h3>
                            <p>Класичний Стівен Кінг</p>
                            <p>22 листопада 1963 року — дата вбивства Джона Кеннеді. Пролунали три постріли — і світ змінився назавжди. </p><p>Сьогодення. Дізнавшись, що в барі його приятеля розташований портал до 1958 року, звичайний шкільний учитель Джейк Еппінг не може опиратися спокусі почати нове життя у рок-н-рольні часи Елвіса Преслі. Хіба гостю з майбутнього важко познайомитися з відлюдником Лі Гарві Освальдом і завадити йому вбити президента? Та чи варто гратися з минулим? Яким буде світ, де Кеннеді виживе?</p>
                        </div>
                    </div> 
                </div>
                <div className="contentReg">
                    <div className="butReg" onClick={() => setModalReg(true)}>
                        <p>ЗАРЕЄСТРУЙТЕСЬ</p>
                    </div>
                    <p>або</p>
                    <div className="butLog" onClick={() => setModalLogin(true)}>
                        <p>УВІЙДІТЬ</p>
                    </div>
                    <p>якщо ви вже зареєстровані</p>
                </div>
            </div>
        </div>
    )
}