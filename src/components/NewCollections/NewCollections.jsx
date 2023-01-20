import rectangle11 from '../../images/Rectangle11.png';
import rectangle12 from '../../images/Rectangle12.png';
import rectangle13 from '../../images/Rectangle13.png';
import Link from '../UI/Link/Link';
import cl from './NewCollections.module.scss';

const NewCollections = () => {
    return (
        <section className={cl.newCollections} id="newCollections">
            <div className={cl.newCollections__outherContainer}>
                <div className={cl.newCollections__innerContainer}>
                    <div className={cl.newCollections__info}>
                        <div className={cl.newCollections__new}>Новинки коллекций</div>
                        <div className={cl.newCollections__title}>
                            <h2 className={cl.newCollections__title__top}>Март 1980 </h2>
                            <h2 className={cl.newCollections__title__bottom}>Урожай Марселя</h2>
                        </div>

                        <div className={cl.newCollections__descriptions}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
                                imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
                                morbi sodales ac.
                            </p>
                        </div>
                        <div className={cl.newCollections__table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>1980</td>
                                        <td>
                                            <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                                            <p>Красочная бутылка вина из Марселя</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1980</td>
                                        <td>
                                            <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                                            <p>Красочная бутылка вина из Марселя</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1980</td>
                                        <td>
                                            <h3>Colli Euganei Bianco Ca' Lustra 1980</h3>
                                            <p>Красочная бутылка вина из Марселя</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={cl.newCollections__descriptions}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
                                imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
                                morbi sodales ac.
                            </p>
                        </div>

                        <div className={cl.newCollections__linkWrapper}>
                            <Link name="узнать подробнее" href="#form" />
                        </div>
                    </div>
                    <div className={cl.newCollections__images}>
                        <div>
                            <img src={rectangle11} alt="wine" />
                        </div>
                        <div className={cl.newCollections__images__row}>
                            <div>
                                <img src={rectangle12} alt="wine" />
                            </div>
                            <div>
                                <img src={rectangle13} alt="wine" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCollections;
