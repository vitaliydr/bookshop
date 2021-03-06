import React from 'react';
import './About.css';
import king1 from './res/king1.jpg';
import king2 from './res/king2.png';
import king3 from './res/king3.jpg';

export default function About() {
    return (
        <div className="containerAbout">
            <div className="pageLineAbout">
                <div className="pageMarkerAbout"></div>
            </div>
            <div className="contentAbout">
                <div className="aboutPhotos">
                    <img className="aboutImg" src={king1} alt="" />
                    <img className="aboutImg" src={king2} alt="" />
                    <img className="aboutImg" src={king3} alt="" />
                </div>
                <div className="aboutText">
                    <p>Стівен Едвін Кінг (народ. 21 вересня 1947, Портленд, Мен, США) — американський письменник, який працює в різноманітних жанрах: жахи, трилер, фантастика, фентезі, містика, драма. Отримав прізвисько — «Король жахів».</p><br />
                    <p>Дитинство Стівена Кінга пройшло переважно в штаті Мен, в містечках Портленд і Дерхем. Пізніше Кінг неодноразово використовував у книжках спогади про дерхемський період. У повісті «Труп» він розповідає про свого друга Кріса Чеслі. В оповіданні «Бабуля» автор фактично переміщає свою родину в епіцентр розвитку містичних подій. В романі «Воно», що оповідає про дітей-невдах, розсіяні шматочки дитинства самого Кінга. В оповіданні «Кінець всієї цієї гидоти» використано образ його старшого брата Девіда Віктора Кінга — невичерпного генератора карколомних ідей та витівок.</p><br />
                    <p>Кар’єру письменника Кінг розпочав у січні 1959 року, вирішивши разом зі старшим братом видавати власну газету. У 1962 році він опублікував 18 коротких оповідань у збірці «Люди, місця і тварі — Том I» (інша назва «Люди, місця та речі — Том I»). Через рік була опублікована друга частина книги — «Зоряні загарбники». </p><br />
                    <p>Закінчив Менський університет в м. Ороно у 1970 році. Отримав ступінь бакалавра, працював вчителем англійської мови.</p><br />
                    <p>Навесні 1973 року опублікував першу повість «Керрі». Фінансовий успіх дозволив Кінгу піти зі школи і цілком присвятити себе письменництву.</p><br />
                    <p>Загалом написав понад 200 творів, багато з яких стали міжнародними бестселерами і були екранізовані в кіно та на телебаченні. Кінг часто виступав і як автор сценаріїв: «Піднесення», «Мертва зона», «Та, що породжує вогонь», «Зелена миля», «Втеча з Шоушенку», «Сонячний пес», «Кладовище домашніх тварин», «Діти кукурудзи», «Воно». Одна з найбільш вдалих екранізацій — фільм «Сяйво» (1980) Стенлі Кубріка, де головну роль виконав Джек Ніколсон.</p><br />
                    <p>Деякі твори публікувалися під псевдонімом Річард Бахман. Неодноразово знімався в невеликих ролях в екранізаціях власних творів. Головною книжкою для письменника стала «Темна вежа» — цикл з восьми романів, присвячений мандрівкам стрілка Роланда з Гілеада і його супутників у пошуках Темної вежі — центру світобудови. Над цим твором письменник працював протягом 30 років, відкладаючи рукопис і знову повертаючись до нього.</p><br />
                    <p>Після автомобільної катастрофи став інвалідом, але продовжив літературну діяльність.</p><br />
                    <p>У 2004 році виходить остання частина епопеї «Темна Вежа», яка, за обіцянками письменника, повинна була стати його останньою роботою. На щастя, Кінг не дотримується обіцянки і продовжує публікувати книжки. У 2009 році Стівен Кінг нарешті опублікував роман «Під куполом», який він два рази безуспішно намагався написати у 1970-х та 1980-х роках.</p><br />
                    <p>У 2011 році вийшов роман «11/22/63». У 2012-му вийшов восьма книжка з циклу «Темна Вежа» — «Вітер у замкову шпарину». Також, Кінг написав роман «Доктор Сон», продовження роману «Сяйво» і роман «Країна розваг».</p><br />
                    <p>У 2014 році вийшли романи «Містер Мерседес» і «Відродження», а 2 червня 2015 вийшов роман «Що впало, те пропало», продовження роману «Містер Мерседес». У 2015-му вийшли дві антології хоррор-оповідань «Ярмарок нічних жахіть» і «Що ховається у темряві». У «Ярмарок нічних жахіть» увійшла розповідь Кінга «Маленький зелений Бог агонії», а у збірку «Що ховається у темряві» увійшла розповідь «Літній грім».</p>
                </div>
            </div>
        </div>
    )
}