import { Link } from 'react-router-dom';

import cl from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={cl.notFound}>
            <h2>Страница не найдена!</h2>
            <p>
                Перейти на <Link to="/">Главную</Link>
            </p>
        </div>
    );
};

export default NotFound;
