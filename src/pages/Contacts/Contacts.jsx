import YandexMap from '@components/YandexMap/YandexMap';

import cl from './Contacts.module.scss';

const Contacts = () => {
    return (
        <div className={cl.contacts}>
            <div className={cl.contacts__body}>
                <div>
                    <div className={cl.contacts__title}>
                        <h2>Контакты</h2>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nisi ipsum laborum consequuntur
                        vel corrupti cumque illum architecto consequatur dicta voluptatibus exercitationem enim, fugiat
                        repellendus explicabo maiores modi quidem?
                    </p>
                    <p>
                        Totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium velit
                        expedita totam nihil. Exercitationem voluptatum temporibus natus voluptas mollitia tenetur
                        beatae. Consequatur sit iusto blanditiis? Harum voluptatibus nobis impedit? Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit.
                    </p>
                    <div>
                        <h5>Адрес</h5>
                        <p>Новокузнечный переулок 4/1</p>
                    </div>
                    <div>
                        <h5>Телефон</h5>
                        <p>8 (812) 123-45-67</p>
                    </div>
                    <div>
                        <h5>Эл. почта</h5>
                        <p>leCorte@.mail.ru</p>
                    </div>
                </div>

                <div className={cl.contacts__body__map}>
                    <YandexMap />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
