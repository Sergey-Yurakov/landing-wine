import cl from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <div className={cl.loader__load}></div>
        </div>
    );
};

export default Loader;
