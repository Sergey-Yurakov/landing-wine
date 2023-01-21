import cl from './Input.module.scss';

const Input = ({ type = 'text', value, setValue, placeholder }) => {
    return (
        <div className={cl.input}>
            <input
                type={type}
                value={value}
                onChange={setValue}
                placeholder={placeholder}
                className={cl.input__content}
            />
        </div>
    );
};

export default Input;
