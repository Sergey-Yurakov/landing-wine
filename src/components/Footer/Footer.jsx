import { Link } from 'react-router-dom';

import cl from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={cl.footer}>
            <div className={cl.footer__container}>
                <div className={cl.footer__bottomBlock}>
                    <ul>
                        <li>
                            <Link to="/">винный бутик LE CORTE</Link>
                        </li>
                        <li>
                            <Link to="/">8 (812) 123-45-67</Link>
                        </li>

                        <li>
                            <Link to="/">© le-corte.ru, {new Date().getFullYear()}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;
