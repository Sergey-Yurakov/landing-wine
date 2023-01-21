import Link from '@components/UI/Link/Link';

import cl from './Header.module.scss';

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.header__container}>
                <div className={cl.header__inner}>
                    <div>
                        <div className={cl.header__inner__linkWrapper}>
                            <Link name="винная карта" href="#newCollections" />
                        </div>
                    </div>
                    <div>
                        <div className={cl.header__inner__linkWrapper}>
                            <Link name="дегустация" href="#newCollections" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
