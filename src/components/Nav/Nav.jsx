import { Link } from 'react-router-dom';

import cl from './Nav.module.scss';

const Nav = () => {
    return (
        <>
            <nav className={cl.nav}>
                <div className={cl.nav__container}>
                    <div className={cl.nav__topBlock}>
                        <p className={cl.nav__text}>Новокузнечный переулок 4/1</p>
                        <a href="tel:+78121234567" className={cl.nav__text}>
                            8 (812) 123-45-67
                        </a>
                    </div>
                    <div className={cl.nav__bottomBlock}>
                        <ul>
                            <li>
                                <Link to="/">Главная </Link>
                            </li>
                            <li>
                                <Link to="/catalog">Каталог</Link>
                            </li>
                            <li>
                                <Link to="/about">О нас</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
