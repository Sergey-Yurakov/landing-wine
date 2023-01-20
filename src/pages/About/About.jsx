import cl from './About.module.scss';

const About = () => {
    return (
        <div className={cl.about}>
            <div className={cl.about__title}>
                <h2>О нас</h2>
            </div>
            <div className={cl.about__body}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nisi ipsum laborum consequuntur vel
                    corrupti cumque illum architecto consequatur dicta voluptatibus exercitationem enim, fugiat
                    repellendus explicabo maiores modi quidem?
                </p>
                <p>
                    Totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium velit
                    expedita totam nihil. Exercitationem voluptatum temporibus natus voluptas mollitia tenetur beatae.
                    Consequatur sit iusto blanditiis? Harum voluptatibus nobis impedit? Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit.
                </p>
                <p>
                    Quisquam voluptatem non aut excepturi consectetur. Aperiam eos tenetur voluptatibus maiores placeat
                    laborum ipsa reiciendis, dignissimos officia ratione laudantium perferendis ad iusto!
                </p>
                <div className={cl.about__image}>
                    <img
                        src="https://decanter.ru/local/templates/main2015/img/about/leninskiy_2.jpg"
                        alt="wine magazine"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
