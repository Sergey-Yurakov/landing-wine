import cl from './ModalWindow.module.scss';

const ModalWindow = ({ children, visible, setVisible, title }) => {
    const rootCl = [cl.modal];
    if (visible) rootCl.push(cl.modal__active);

    return (
        <div className={rootCl.join(' ')} onClick={() => setVisible(prev => !prev)}>
            <div className={cl.modal__content} onClick={e => e.stopPropagation()}>
                <div className={cl.modal__text}>
                    <div>
                        <h2>{title} </h2>
                    </div>
                    <div>{children}</div>
                </div>
                <div onClick={() => setVisible(prev => !prev)}>
                    <button className={cl.modal__button}>закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
