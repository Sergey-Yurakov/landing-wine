import cl from './Input.module.scss';

const Input = ({ type = 'text', value, setValue, placeholder }) => {
    return (
        <div>
            <input type={type} value={value} onChange={setValue} placeholder={placeholder} className={cl.input} />
        </div>
    );
};

export default Input;
