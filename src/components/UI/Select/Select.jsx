import cl from './Select.module.scss';

const Select = ({ value, setValue, defaultValue, options }) => {
    return (
        <div>
            <select value={value} onChange={setValue} className={cl.select}>
                <option value="" disabled>
                    {defaultValue}
                </option>
                {options.map(i => (
                    <option value={i.value}>{i.name} </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
