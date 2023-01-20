import glassWine from '../../images/glassWine.svg';
import cl from './Descriptions.module.scss';

const Descriptions = () => {
    return (
        <section className={cl.descriptions__bg}>
            <div className={cl.descriptions__container}>
                <div className={cl.descriptions__body}>
                    <h2 className={cl.descriptions__title}>Лучший вкус, это вкус долголетнего вина</h2>
                    <div className={cl.descriptions__content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id
                            imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
                            morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices
                            nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor
                            purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras
                            sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit
                            duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus.
                            Pellentesque scelerisque nunc, orci aliquam quis.
                        </p>
                    </div>
                    <div className={cl.descriptions__icon}>
                        <img src={glassWine} alt="glassWine" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Descriptions;
