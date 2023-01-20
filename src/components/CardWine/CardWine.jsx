import cl from './CardWine.module.scss';

const CardWine = ({ data }) => {
    return (
        <div className={cl.catalog__content}>
            {data.map(({ id, title, image, price, type, year, sort, brand, region, strength }) => (
                <div key={id} className={cl.catalog__content__wrap}>
                    <div className={cl.catalog__content__image}>
                        <img src={image} alt={title} loading="lazy" />
                    </div>
                    <div className={cl.catalog__content__container}>
                        <div className={cl.catalog__content__title}>
                            <h3>{title} </h3>
                        </div>

                        <div className={cl.catalog__content__type}>
                            <p>
                                <span>Тип: </span>
                                {type}
                            </p>
                        </div>
                        <div className={cl.catalog__content__year}>
                            <p>
                                <span>Год: </span>
                                {year}
                            </p>
                        </div>
                        <div className={cl.catalog__content__sort}>
                            <p>
                                <span>Сорт: </span>
                                {sort}
                            </p>
                        </div>
                        <div className={cl.catalog__content__brand}>
                            <p>
                                <span>Бренд: </span>
                                {brand}
                            </p>
                        </div>
                        <div className={cl.catalog__content__region}>
                            <p>
                                <span>Регион: </span>
                                {region}
                            </p>
                        </div>
                        <div className={cl.catalog__content__strength}>
                            <p>
                                <span>Крепость: </span>
                                {strength}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardWine;
