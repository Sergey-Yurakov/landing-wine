import cl from './Link.module.scss';

const Link = ({ name, href = '*' }) => {
    return (
        <a href={href} className={cl.link}>
            {name}
        </a>
    );
};

export default Link;
